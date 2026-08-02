/* ============ Japão 2026 — app ============ */
(function () {
  "use strict";

  var LS_KEY = "japantrip-2026-v1";
  var THEME_KEY = "japantrip-theme";

  /* ---------- labels ---------- */
  var CIDADES = { toquio: "Tóquio", kyoto: "Kyoto", osaka: "Osaka", kawaguchiko: "Kawaguchiko", kamakura: "Kamakura", himeji: "Himeji", fuji: "Monte Fuji", voo: "Voo", outra: "Outra" };
  var CAT_LUGAR = { bairros: "Bairros e caminhadas", templos: "Templos e santuários", comida: "Comida e restaurantes", cafes: "Cafés e padarias", compras: "Compras e lojas", games: "Videogames e tecnologia", design: "Design, livros e papelaria", mercados: "Mercados", museus: "Museus e arte", fotos: "Fotografia e vistas", fora: "Bate-volta / fora de Tóquio", confirmar: "[A confirmar]" };
  var CAT_COMPRA = { roupas: "Roupas e tênis", eletronicos: "Eletrônicos", videogames: "Videogames", papelaria: "Papelaria", perfumes: "Perfumes", beleza: "Beleza", cozinha: "Cozinha e facas", souvenirs: "Souvenirs", midia: "Revistas, livros e música", fuji: "Fuji", "segunda-mao": "Segunda mão", design: "Design e objetos", confirmar: "[A confirmar]" };
  var ST_LUGAR = { quero: "Quero ir", reservado: "Reservado", confirmado: "Confirmado", feito: "Feito ✓", talvez: "Talvez", descartar: "Descartar" };
  var ST_COMPRA = { pesquisar: "Pesquisar", comprar: "Comprar", comprado: "Comprado ✓", desistir: "Desistir" };
  var ST_TAREFA = { pendente: "Pendente", andamento: "Em andamento", feito: "Feito ✓" };
  var ST_RESERVA = { reservado: "Reservado", pagar: "Pagar", confirmar: "Confirmar", usado: "Usado ✓", cancelar: "Cancelar", verificar: "[A verificar]" };
  var ST_DOC = { ok: "OK ✓", pendente: "Pendente", verificar: "[A verificar]" };
  var PRIO = { alta: "Alta", media: "Média", baixa: "Baixa" };
  var ORIGEM_EQUIP = { tenho: "Tenho", "comprar-brasil": "Comprar no Brasil", "comprar-japao": "Comprar no Japão", alugar: "Alugar", levar: "Levar do Brasil" };
  var GRUPO_EQUIP = { roupas: "Roupas", termica: "Camadas térmicas", chuva: "Chuva e vento", calcados: "Calçados", mochila: "Mochila", iluminacao: "Iluminação", comida: "Comida", agua: "Água", dinheiro: "Dinheiro", documentos: "Documentos", eletronicos: "Eletrônicos", emergencia: "Emergência" };
  var DIAS_SEM = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

  /* ---------- state ---------- */
  var DB = load();
  var undoBuf = null;

  function seed() { return JSON.parse(JSON.stringify(window.SEED_DATA)); }
  var SYNC_KEYS = ["lugares", "compras", "checklist", "voos", "reservas", "documentos", "roteiro"];
  function mergeNovosItens(existente, atual) {
    var mudou = false;
    SYNC_KEYS.forEach(function (chave) {
      if (!Array.isArray(existente[chave])) { existente[chave] = atual[chave] || []; mudou = true; return; }
      var idsExistentes = {};
      existente[chave].forEach(function (item) { if (item && item.id) idsExistentes[item.id] = true; });
      (atual[chave] || []).forEach(function (item) {
        if (item && item.id && !idsExistentes[item.id]) { existente[chave].push(item); mudou = true; }
      });
    });
    return mudou;
  }
  function load() {
    var atual = seed();
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) {
        var d = JSON.parse(raw);
        if (d && d.lugares) {
          // Sincroniza: adiciona itens novos do site (por id) sem tocar no que você já editou.
          if (mergeNovosItens(d, atual)) {
            try { localStorage.setItem(LS_KEY, JSON.stringify(d)); } catch (e) { /* ignore */ }
          }
          return d;
        }
      }
    } catch (e) { /* seed */ }
    return atual;
  }
  function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(DB)); } catch (e) { toast("Não consegui salvar (armazenamento cheio?)"); } }
  function uid(p) { return p + "-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* ---------- helpers ---------- */
  function fmtData(iso) {
    if (!iso || !/^\d{4}-\d{2}-\d{2}/.test(iso)) return iso || "";
    var d = new Date(iso + "T12:00:00");
    return ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + " (" + DIAS_SEM[d.getDay()] + ")";
  }
  function hoje() {
    // data LOCAL (toISOString usa UTC e erra o dia à noite no Brasil / de manhã no Japão)
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  function diasAte(iso) { return Math.ceil((new Date(iso + "T00:00:00") - new Date(new Date().toDateString())) / 864e5); }
  function statusBadge(val, map, kind) {
    var cls = "badge";
    if (/feito|comprado|usado|ok/.test(val)) cls += " b-ok";
    else if (/pagar|confirmar|pendente|verificar|pesquisar/.test(val)) cls += " b-warn";
    else if (/reservado|confirmado|comprar|quero|andamento/.test(val)) cls += " b-info";
    return '<span class="' + cls + '">' + esc(map[val] || val) + "</span>";
  }
  function mapsLink(l) {
    if (l.googleMaps) return l.googleMaps;
    var q = l.nome + (l.bairro && l.bairro.indexOf("[") < 0 ? " " + l.bairro : "") + " " + (CIDADES[l.cidade] || "Japan");
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  }

  /* ---------- toast + undo ---------- */
  function toast(msg, undoFn) {
    var zone = document.getElementById("toast-zone");
    var t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = "<span>" + esc(msg) + "</span>" + (undoFn ? "<button>Desfazer</button>" : "");
    if (undoFn) t.querySelector("button").onclick = function () { undoFn(); kill(); };
    zone.appendChild(t);
    var tm = setTimeout(kill, undoFn ? 6000 : 2600);
    function kill() { clearTimeout(tm); t.classList.add("out"); setTimeout(function () { t.remove(); }, 260); }
  }

  /* ---------- generic CRUD ---------- */
  function coll(name) { return DB[name]; }
  function findItem(name, id) { return coll(name).find(function (x) { return x.id === id; }); }
  function removeItem(name, id, label) {
    var arr = coll(name);
    var idx = arr.findIndex(function (x) { return x.id === id; });
    if (idx < 0) return;
    if (!confirm("Excluir “" + (label || "item") + "”?")) return;
    var item = arr.splice(idx, 1)[0];
    save(); render();
    toast("Excluído.", function () { arr.splice(idx, 0, item); save(); render(); toast("Restaurado."); });
  }
  function cycleStatus(name, id, order) {
    var it = findItem(name, id);
    if (!it) return;
    var i = order.indexOf(it.status);
    it.status = order[(i + 1) % order.length];
    save(); render();
  }
  function toggleDone(name, id, doneVal, undoneVal) {
    var it = findItem(name, id);
    if (!it) return;
    it.status = (it.status === doneVal) ? undoneVal : doneVal;
    save(); render();
    if (it.status === doneVal) toast("Marcado como feito ✓");
  }

  /* ---------- modal form ---------- */
  var backdrop = document.getElementById("modal-backdrop");
  var modalForm = document.getElementById("modal-form");
  var modalTitle = document.getElementById("modal-title");

  function field(f, val) {
    var v = val == null ? (f.def || "") : val;
    if (f.type === "select" && typeof v === "boolean") v = v ? "sim" : "";
    var h = '<div class="field"><label>' + esc(f.label) + "</label>";
    if (f.type === "select") {
      h += '<select name="' + f.key + '">';
      Object.keys(f.opts).forEach(function (k) {
        h += '<option value="' + k + '"' + (k === v ? " selected" : "") + ">" + esc(f.opts[k]) + "</option>";
      });
      h += "</select>";
    } else if (f.type === "textarea") {
      h += '<textarea name="' + f.key + '" placeholder="' + esc(f.ph || "") + '">' + esc(v) + "</textarea>";
    } else {
      h += '<input name="' + f.key + '" type="' + (f.type || "text") + '" value="' + esc(v) + '" placeholder="' + esc(f.ph || "") + '"' + (f.req ? " required" : "") + ">";
    }
    return h + "</div>";
  }

  function openForm(title, fields, item, onSave) {
    modalTitle.textContent = title;
    var html = "";
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (f.half && fields[i + 1] && fields[i + 1].half) {
        html += '<div class="field-row">' + field(f, item ? item[f.key] : null) + field(fields[i + 1], item ? item[fields[i + 1].key] : null) + "</div>";
        i++;
      } else html += field(f, item ? item[f.key] : null);
    }
    html += '<div class="modal-actions"><button type="button" class="btn" id="form-cancel">Cancelar</button><button type="submit" class="btn primary">Salvar</button></div>';
    modalForm.innerHTML = html;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    modalForm.onsubmit = function (ev) {
      ev.preventDefault();
      var data = {};
      fields.forEach(function (f) {
        var el = modalForm.elements[f.key];
        if (el) data[f.key] = el.value.trim();
      });
      onSave(data);
      closeModal();
      save(); render();
      toast("Salvo ✓");
    };
    document.getElementById("form-cancel").onclick = closeModal;
    var first = modalForm.querySelector("input,textarea");
    if (first && window.innerWidth > 700) first.focus();
  }
  function closeModal() { backdrop.hidden = true; document.body.style.overflow = ""; }
  document.getElementById("modal-close").onclick = closeModal;
  backdrop.addEventListener("click", function (e) { if (e.target === backdrop) closeModal(); });

  /* ---------- form schemas ---------- */
  var F_LUGAR = [
    { key: "nome", label: "Nome", req: 1, ph: "Nome do lugar" },
    { key: "cidade", label: "Cidade", type: "select", opts: CIDADES, half: 1 },
    { key: "categoria", label: "Categoria", type: "select", opts: CAT_LUGAR, half: 1 },
    { key: "bairro", label: "Bairro", ph: "ex: Shibuya", half: 1 },
    { key: "prioridade", label: "Prioridade", type: "select", opts: PRIO, def: "media", half: 1 },
    { key: "status", label: "Status", type: "select", opts: ST_LUGAR, def: "quero", half: 1 },
    { key: "precisaReservar", label: "Precisa reservar?", type: "select", opts: { "": "Não", sim: "Sim" }, half: 1 },
    { key: "endereco", label: "Endereço", ph: "opcional" },
    { key: "googleMaps", label: "Link do Google Maps", type: "url", ph: "https://…" },
    { key: "site", label: "Site / Instagram", ph: "https://…" },
    { key: "melhorHorario", label: "Melhor horário", ph: "ex: manhã cedo", half: 1 },
    { key: "tempoEstimado", label: "Tempo estimado", ph: "ex: 1h30", half: 1 },
    { key: "custoEstimado", label: "Custo estimado", ph: "ex: ¥2.000", half: 1 },
    { key: "motivo", label: "Por que quero ir", type: "textarea" },
    { key: "notas", label: "Notas", type: "textarea" }
  ];
  var F_COMPRA = [
    { key: "item", label: "Item", req: 1 },
    { key: "categoria", label: "Categoria", type: "select", opts: CAT_COMPRA, half: 1 },
    { key: "status", label: "Status", type: "select", opts: ST_COMPRA, def: "pesquisar", half: 1 },
    { key: "prioridade", label: "Prioridade", type: "select", opts: PRIO, def: "media", half: 1 },
    { key: "cidade", label: "Cidade", type: "select", opts: CIDADES, half: 1 },
    { key: "loja", label: "Loja / bairro", ph: "ex: Loft Shibuya" },
    { key: "faixaPreco", label: "Faixa de preço", ph: "ex: ¥3.000–5.000", half: 1 },
    { key: "link", label: "Link", type: "url", ph: "https://…", half: 1 },
    { key: "observacoes", label: "Observações", type: "textarea" }
  ];
  var F_TAREFA = [
    { key: "titulo", label: "Tarefa", req: 1 },
    { key: "categoria", label: "Categoria", ph: "ex: documentos", half: 1 },
    { key: "prazo", label: "Prazo", type: "date", half: 1 },
    { key: "prioridade", label: "Prioridade", type: "select", opts: PRIO, def: "media", half: 1 },
    { key: "status", label: "Status", type: "select", opts: ST_TAREFA, def: "pendente", half: 1 },
    { key: "link", label: "Link", type: "url", ph: "https://…" },
    { key: "observacoes", label: "Observações", type: "textarea" }
  ];
  var F_RESERVA = [
    { key: "nome", label: "Nome", req: 1 },
    { key: "tipo", label: "Tipo", type: "select", opts: { hospedagem: "Hospedagem", ingresso: "Ingresso", restaurante: "Restaurante", transporte: "Transporte", equipamento: "Equipamento", experiencia: "Experiência", outro: "Outro" }, half: 1 },
    { key: "cidade", label: "Cidade", type: "select", opts: CIDADES, half: 1 },
    { key: "data", label: "Data", type: "date", half: 1 },
    { key: "horario", label: "Horário", ph: "ex: 16:30", half: 1 },
    { key: "status", label: "Status", type: "select", opts: ST_RESERVA, def: "confirmar" },
    { key: "endereco", label: "Endereço" },
    { key: "codigoReserva", label: "Código de reserva", ph: "fica escondido no card" },
    { key: "link", label: "Link", type: "url", ph: "https://…" },
    { key: "notas", label: "Notas", type: "textarea" }
  ];
  var F_DOC = [
    { key: "nome", label: "Nome do documento", req: 1 },
    { key: "tipo", label: "Tipo", type: "select", opts: { documento: "Documento", passagem: "Passagem", reserva: "Reserva", ingresso: "Ingresso", seguro: "Seguro", qr: "QR code", comprovante: "Comprovante", outro: "Outro" }, half: 1 },
    { key: "status", label: "Status", type: "select", opts: ST_DOC, def: "pendente", half: 1 },
    { key: "linkOuReferencia", label: "Link ou onde está guardado", ph: "ex: iCloud > Viagem" },
    { key: "observacao", label: "Observação", type: "textarea" }
  ];
  var F_VOO = [
    { key: "trecho", label: "Trecho", req: 1, ph: "ex: Ida · trecho 1" },
    { key: "companhia", label: "Companhia", half: 1 },
    { key: "numeroVoo", label: "Nº do voo", half: 1 },
    { key: "aeroportoOrigem", label: "Origem (aeroporto)", half: 1 },
    { key: "aeroportoDestino", label: "Destino (aeroporto)", half: 1 },
    { key: "data", label: "Data", type: "date", half: 1 },
    { key: "horarioSaida", label: "Saída", ph: "ex: 22:30", half: 1 },
    { key: "horarioChegada", label: "Chegada", ph: "ex: 04:05 (+1)", half: 1 },
    { key: "assento", label: "Assento", half: 1 },
    { key: "codigoReserva", label: "Código de reserva", ph: "fica escondido no card" },
    { key: "status", label: "Status", type: "select", opts: { confirmado: "Confirmado", checkin: "Check-in feito", verificar: "[A verificar]" }, def: "confirmado" },
    { key: "observacoes", label: "Observações", type: "textarea" }
  ];
  var F_EQUIP = [
    { key: "item", label: "Item", req: 1 },
    { key: "grupo", label: "Grupo", type: "select", opts: GRUPO_EQUIP, half: 1 },
    { key: "origem", label: "Como resolver", type: "select", opts: ORIGEM_EQUIP, half: 1 },
    { key: "prioridade", label: "Prioridade", type: "select", opts: PRIO, def: "media", half: 1 },
    { key: "status", label: "Status", type: "select", opts: ST_TAREFA, def: "pendente", half: 1 },
    { key: "observacao", label: "Observação", type: "textarea" }
  ];
  var F_DIA = [
    { key: "titulo", label: "Título do dia", req: 1 },
    { key: "cidade", label: "Cidade", type: "select", opts: CIDADES },
    { key: "manha", label: "Manhã", type: "textarea" },
    { key: "tarde", label: "Tarde", type: "textarea" },
    { key: "noite", label: "Noite", type: "textarea" },
    { key: "deslocamentos", label: "Deslocamentos", type: "textarea" },
    { key: "reservas", label: "Reservas do dia", type: "textarea" },
    { key: "planoB", label: "Plano B", type: "textarea" }
  ];

  function addOrEdit(collName, fields, item, title, extra) {
    openForm(title, fields, item, function (data) {
      if (item) Object.assign(item, data);
      else {
        data.id = uid(collName.slice(0, 2));
        if (extra) Object.assign(data, extra);
        coll(collName).push(data);
      }
    });
  }

  /* ---------- kebab menu ---------- */
  var openMenu = null;
  function closeMenu() { if (openMenu) { openMenu.remove(); openMenu = null; } }
  document.addEventListener("click", function (e) { if (openMenu && !openMenu.contains(e.target)) closeMenu(); }, true);
  document.addEventListener("scroll", closeMenu, { capture: true, passive: true });
  function showMenu(anchor, actions) {
    closeMenu();
    var m = document.createElement("div");
    m.className = "menu";
    actions.forEach(function (a) {
      if (a === "hr") { m.appendChild(document.createElement("hr")); return; }
      var b = document.createElement("button");
      b.innerHTML = a.icon + " " + esc(a.label);
      if (a.danger) b.className = "danger";
      b.onclick = function (e) { e.stopPropagation(); closeMenu(); a.fn(); };
      m.appendChild(b);
    });
    document.body.appendChild(m);
    var r = anchor.getBoundingClientRect();
    var mw = 180;
    m.style.top = Math.min(r.bottom + 4, window.innerHeight - m.offsetHeight - 12) + "px";
    m.style.left = Math.max(8, Math.min(r.right - mw, window.innerWidth - mw - 8)) + "px";
    openMenu = m;
  }

  /* ---------- routing ---------- */
  var view = document.getElementById("view");
  var titleEl = document.getElementById("topbar-title");
  var backBtn = document.getElementById("btn-back");
  var ROOT_ROUTES = ["home", "reservas", "frases", "documentos"];

  function route() {
    var h = location.hash.replace(/^#\//, "") || "home";
    return h.split("/");
  }
  function go(path) { location.hash = "#/" + path; }
  window.addEventListener("hashchange", function () { closeMenu(); closeSheet(); render(); view.scrollTop = 0; window.scrollTo(0, 0); });
  backBtn.onclick = function () { history.length > 1 ? history.back() : go("home"); };

  /* ---------- more sheet ---------- */
  var sheet = document.getElementById("more-sheet");
  var sheetBk = document.getElementById("sheet-backdrop");
  var sheetDrag = document.getElementById("sheet-draghandle");

  function openSheet() {
    sheet.hidden = false;
    sheetBk.hidden = false;
    sheet.classList.remove("closing", "dragging", "snapback");
    sheet.style.transform = "";
  }
  function closeSheet() {
    if (sheet.hidden) return;
    sheetBk.hidden = true;
    sheet.classList.remove("dragging", "snapback");
    sheet.classList.add("closing");
    var done = function () {
      sheet.removeEventListener("animationend", done);
      sheet.hidden = true;
      sheet.classList.remove("closing");
      sheet.style.transform = "";
    };
    sheet.addEventListener("animationend", done);
    // fallback caso o evento não dispare (ex: tab trocada de foco)
    setTimeout(done, 260);
  }
  document.getElementById("btn-more").onclick = openSheet;
  sheetBk.onclick = closeSheet;
  sheet.addEventListener("click", function (e) { if (e.target.closest("a")) closeSheet(); });

  /* arrastar o sheet pra baixo pra fechar */
  var dragY0 = 0, dragDY = 0, dragging = false, dragH = 0;
  function dragStart(e) {
    dragging = true;
    dragY0 = e.clientY;
    dragDY = 0;
    dragH = sheet.offsetHeight || 400;
    sheet.classList.add("dragging");
    sheet.classList.remove("snapback");
    if (sheetDrag.setPointerCapture) { try { sheetDrag.setPointerCapture(e.pointerId); } catch (err) {} }
  }
  function dragMove(e) {
    if (!dragging) return;
    dragDY = Math.max(0, e.clientY - dragY0);
    sheet.style.transform = "translateY(" + dragDY + "px)";
  }
  function dragEnd() {
    if (!dragging) return;
    dragging = false;
    sheet.classList.remove("dragging");
    if (dragDY > Math.min(130, dragH * 0.3)) {
      closeSheet();
    } else {
      sheet.classList.add("snapback");
      sheet.style.transform = "";
      setTimeout(function () { sheet.classList.remove("snapback"); }, 260);
    }
    dragDY = 0;
  }
  sheetDrag.addEventListener("pointerdown", dragStart);
  sheetDrag.addEventListener("pointermove", dragMove);
  sheetDrag.addEventListener("pointerup", dragEnd);
  sheetDrag.addEventListener("pointercancel", dragEnd);

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById("btn-theme");
  function syncThemeColor() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) { m.setAttribute("content", dark ? "#141413" : "#fafaf9"); });
  }
  function applyTheme() {
    var t = localStorage.getItem(THEME_KEY);
    if (t) document.documentElement.setAttribute("data-theme", t);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.setAttribute("data-theme", "dark");
    syncThemeColor();
  }
  themeBtn.onclick = function () {
    var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", cur);
    localStorage.setItem(THEME_KEY, cur);
    syncThemeColor();
  };
  applyTheme();

  /* =================================================
     RENDERERS
     ================================================= */
  var filters = { lugares: { cidade: "toquio", cat: "", status: "", q: "" }, compras: { cat: "", status: "", q: "" } };

  function render() {
    var r = route();
    var name = r[0];
    document.querySelectorAll(".bottomnav [data-nav]").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-nav") === name || (name === "cidade" && el.getAttribute("data-nav") === "lugares"));
    });
    backBtn.hidden = ROOT_ROUTES.indexOf(name) >= 0;
    var fns = { home: rHome, roteiro: rRoteiro, lugares: rLugares, cidade: rCidade, compras: rCompras, voos: rVoos, reservas: rReservas, fuji: rFuji, antes: rAntes, documentos: rDocs, info: rInfo, links: rLinks, dados: rDados, frases: rFrases };
    (fns[name] || rHome)(r);
  }

  /* ----- HOME ----- */
  var CIDADE_SUB_LABEL = { kawaguchiko: "Base do Fuji", kamakura: "Bate-volta", himeji: "Bate-volta" };
  function nLugaresCidade(cid) { return DB.lugares.filter(function (l) { return l.cidade === cid && l.status !== "descartar"; }).length; }
  function cidadeSub(cid, termo) {
    var n = nLugaresCidade(cid);
    if (n > 0) return n + " lugares";
    var dia = DB.roteiro.find(function (d) { return ((d.titulo || "") + " " + (d.deslocamentos || "")).toLowerCase().indexOf(termo) >= 0; });
    if (dia) return (CIDADE_SUB_LABEL[cid] || "No roteiro") + " · " + dia.data.slice(8, 10) + "/" + dia.data.slice(5, 7);
    return "Em breve";
  }
  function horaEm(tz) {
    try { return new Intl.DateTimeFormat("pt-BR", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()); }
    catch (e) { return "--:--"; }
  }
  var clockTimer = null;
  function tickClock() {
    var a = document.getElementById("clock-tokyo"), b = document.getElementById("clock-sp");
    if (!a || !b) { clearInterval(clockTimer); clockTimer = null; return; }
    a.textContent = horaEm("Asia/Tokyo");
    b.textContent = horaEm("America/Sao_Paulo");
  }
  function rHome() {
    titleEl.textContent = "";
    var h = '<div class="hero"><span class="hero-eyebrow">Férias 2026</span><h2>Japão 🇯🇵</h2></div>';

    h += '<div class="quickgrid">' +
      qc("#/roteiro", "🗓", "Roteiro", DB.roteiro.length + " dias") +
      qc("#/fuji", "🗻", "Fuji", "08–09/09 · Yoshida") +
      qc("#/cidade/toquio", "🗼", "Tokyo", nLugaresCidade("toquio") + " lugares") +
      qc("#/cidade/kawaguchiko", "🌸", "Kawaguchiko", cidadeSub("kawaguchiko", "kawaguchiko")) +
      qc("#/cidade/kyoto", "⛩", "Kyoto", nLugaresCidade("kyoto") + " lugares") +
      qc("#/cidade/osaka", "🏯", "Osaka", nLugaresCidade("osaka") + " lugares") +
      qc("#/cidade/himeji", "🏰", "Himeji", cidadeSub("himeji", "himeji")) +
      qc("#/cidade/kamakura", "🌊", "Kamakura", cidadeSub("kamakura", "kamakura")) +
      "</div>";

    h += '<div class="card clockcard">' +
      '<div class="clock-col"><span class="clock-city">Tokyo</span><span class="clock-tz">UTC+9</span><span class="clock-time" id="clock-tokyo">' + horaEm("Asia/Tokyo") + "</span></div>" +
      '<div class="clock-div"></div>' +
      '<div class="clock-col"><span class="clock-city">São Paulo</span><span class="clock-tz">UTC-3</span><span class="clock-time" id="clock-sp">' + horaEm("America/Sao_Paulo") + "</span></div>" +
      "</div>";

    view.innerHTML = h;
    clearInterval(clockTimer);
    clockTimer = setInterval(tickClock, 30000);
  }
  function qc(href, ico, t, sub) { return '<a class="quickcard" href="' + href + '"><span class="qc-ico">' + ico + '</span><span class="qc-title">' + t + '</span><span class="qc-sub">' + esc(sub) + "</span></a>"; }

  /* ----- FRASES ----- */
  function rFrases() {
    titleEl.textContent = "Frases";
    var h = '<div class="notice info"><span>ⓘ</span><div>Frases prontas para o dia a dia. Guias completos (transporte, etiqueta, emergência) em Menu → Informações.</div></div>';
    DB.infoUteis.frases.forEach(function (f) {
      h += '<div class="card frase-card"><span class="frase-jp">' + esc(f.jp) + '</span><span class="frase-romaji">' + esc(f.romaji) + '</span><span class="frase-pt">' + esc(f.pt) + "</span></div>";
    });
    view.innerHTML = h;
  }


  /* ----- ROTEIRO ----- */
  function dayCard(d, open, compact) {
    var dd = d.data.slice(8, 10);
    var isToday = d.data === hoje();
    var slots = [["Manhã", d.manha], ["Tarde", d.tarde], ["Noite", d.noite], ["Trajetos", d.deslocamentos], ["Reservas", d.reservas], ["Plano B", d.planoB]];
    var body = slots.map(function (s) {
      var txt = s[1] || "";
      return '<div class="slot"><div class="slot-label">' + s[0] + '</div><div class="slot-text' + (txt ? "" : " empty") + '">' + (txt ? esc(txt) : "—") + "</div></div>";
    }).join("");
    return '<div class="card daycard' + (open ? " open" : "") + (isToday ? " day-today" : "") + '" data-day="' + d.id + '">' +
      '<div class="day-head">' +
      '<div class="day-date"><b>' + dd + '</b><span>' + DIAS_SEM[new Date(d.data + "T12:00:00").getDay()] + "</span></div>" +
      '<div class="card-main"><div class="day-city">' + esc(CIDADES[d.cidade] || d.cidade) + '</div><div class="day-title">' + esc(d.titulo) + "</div></div>" +
      '<button class="kebab" data-kebab="' + d.id + '" aria-label="Opções">⋯</button>' +
      "</div><div class='day-body'>" + body + "</div></div>";
  }
  function bindDayCards() {
    view.querySelectorAll(".daycard").forEach(function (c) {
      c.querySelector(".day-head").addEventListener("click", function (e) {
        if (e.target.closest(".kebab")) return;
        c.classList.toggle("open");
      });
      var kb = c.querySelector("[data-kebab]");
      if (kb) kb.onclick = function (e) {
        e.stopPropagation();
        var d = DB.roteiro.find(function (x) { return x.id === kb.getAttribute("data-kebab"); });
        showMenu(kb, [{ icon: "✎", label: "Editar dia", fn: function () { openForm("Editar " + fmtData(d.data), F_DIA, d, function (data) { Object.assign(d, data); }); } }]);
      };
    });
  }
  function rRoteiro() {
    titleEl.textContent = "Roteiro";
    var h = '<div class="notice info"><span>ⓘ</span><div>Toque num dia para expandir. Dias marcados [A DEFINIR] estão livres — edite pelo menu ⋯</div></div>';
    DB.roteiro.forEach(function (d) { h += dayCard(d, d.data === hoje()); });
    view.innerHTML = h;
    bindDayCards();
  }

  /* ----- LUGARES ----- */
  function lugarCard(l) {
    var done = l.status === "feito";
    var badges = "";
    badges += statusBadge(l.status, ST_LUGAR);
    if (l.categoria) badges += '<span class="badge">' + esc(CAT_LUGAR[l.categoria] || l.categoria) + "</span>";
    if (l.prioridade === "alta") badges += '<span class="badge b-accent">★ prioridade</span>';
    if (l.precisaReservar) badges += '<span class="badge b-warn">Precisa reservar</span>';
    if (l.precisaIngresso) badges += '<span class="badge b-warn">Comprar ingresso</span>';
    if (l.verificarPertoDaViagem) badges += '<span class="badge">verificar perto da viagem</span>';
    var sub = [l.bairro, CIDADES[l.cidade]].filter(Boolean).join(" · ");
    var det = [];
    if (l.melhorHorario) det.push("🕐 " + l.melhorHorario);
    if (l.tempoEstimado) det.push("⌛ " + l.tempoEstimado);
    if (l.custoEstimado) det.push("¥ " + l.custoEstimado);
    var notes = [l.motivo, l.notas, l.nomeOriginal ? "Nome original: " + l.nomeOriginal : ""].filter(Boolean).join(" · ");
    return '<div class="card" data-id="' + l.id + '"><div class="card-row">' +
      '<button class="check' + (done ? " on" : "") + '" data-done="' + l.id + '" aria-label="Marcar como feito">✓</button>' +
      '<div class="card-main"><div class="card-title' + (done ? " done" : "") + '">' + esc(l.nome) + "</div>" +
      (sub ? '<div class="card-sub">' + esc(sub) + "</div>" : "") +
      (det.length ? '<div class="card-sub">' + esc(det.join("  ·  ")) + "</div>" : "") +
      '<div class="badges">' + badges + "</div>" +
      '<div class="linkrow"><a class="linkbtn" target="_blank" rel="noopener" href="' + esc(mapsLink(l)) + '">Ver no Maps ↗</a>' +
      (l.site ? '<a class="linkbtn" target="_blank" rel="noopener" href="' + esc(l.site) + '">Site ↗</a>' : "") + "</div>" +
      (notes ? '<div class="card-notes">' + esc(notes) + "</div>" : "") +
      "</div>" +
      '<button class="kebab" data-menu="' + l.id + '" aria-label="Opções">⋯</button></div></div>';
  }
  function bindLugares() {
    view.querySelectorAll("[data-done]").forEach(function (b) {
      b.onclick = function () { toggleDone("lugares", b.getAttribute("data-done"), "feito", "quero"); };
    });
    view.querySelectorAll("[data-menu]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var l = findItem("lugares", b.getAttribute("data-menu"));
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { addOrEdit("lugares", F_LUGAR, l, "Editar lugar"); } },
          { icon: "↻", label: "Mudar status", fn: function () { cycleStatus("lugares", l.id, ["quero", "reservado", "confirmado", "feito", "talvez", "descartar"]); } },
          { icon: l.prioridade === "alta" ? "☆" : "★", label: l.prioridade === "alta" ? "Tirar prioridade" : "Priorizar", fn: function () { l.prioridade = l.prioridade === "alta" ? "media" : "alta"; save(); render(); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () { removeItem("lugares", l.id, l.nome); } }
        ]);
      };
    });
  }
  function chipsRow(list, cur, cb) {
    return '<div class="filters">' + list.map(function (c) {
      return '<button class="chip' + (c.v === cur ? " on" : "") + '" data-chip="' + c.v + '">' + esc(c.t) + "</button>";
    }).join("") + "</div>";
  }
  function rLugares() {
    titleEl.textContent = "Lugares";
    var f = filters.lugares;
    var items = DB.lugares.filter(function (l) {
      if (f.cidade && l.cidade !== f.cidade) return false;
      if (f.cat && l.categoria !== f.cat) return false;
      if (f.status === "aberto" && (l.status === "feito" || l.status === "descartar")) return false;
      if (f.q && (l.nome + " " + (l.bairro || "") + " " + (l.notas || "")).toLowerCase().indexOf(f.q.toLowerCase()) < 0) return false;
      return true;
    });
    items.sort(function (a, b) {
      var p = { alta: 0, media: 1, baixa: 2 };
      return (p[a.prioridade] || 1) - (p[b.prioridade] || 1);
    });
    var cats = [{ v: "", t: "Tudo" }].concat(Object.keys(CAT_LUGAR).map(function (k) { return { v: k, t: CAT_LUGAR[k] }; }));
    var h = chipsRow([{ v: "toquio", t: "Tóquio" }, { v: "kyoto", t: "Kyoto" }, { v: "osaka", t: "Osaka" }, { v: "fuji", t: "Fuji" }, { v: "", t: "Todas" }], f.cidade);
    h += '<div class="searchbar"><input id="lg-q" type="search" placeholder="Buscar lugar…" value="' + esc(f.q) + '"></div>';
    h += '<div class="filters" id="lg-cats">' + cats.map(function (c) { return '<button class="chip' + (c.v === f.cat ? " on" : "") + '" data-cat="' + c.v + '">' + esc(c.t) + "</button>"; }).join("") + "</div>";
    h += '<div class="filters"><button class="chip' + (f.status === "aberto" ? " on" : "") + '" id="lg-hide-done">Esconder feitos</button><span class="chip" style="pointer-events:none">' + items.length + " lugares</span></div>";
    if (!items.length) h += emptyState("◎", f.cidade && f.cidade !== "toquio" ? "Nada salvo em " + (CIDADES[f.cidade] || "") + " ainda. Este é o template pronto — adicione o primeiro lugar." : "Nenhum lugar com esses filtros.", "Adicionar lugar");
    else items.forEach(function (l) { h += lugarCard(l); });
    view.innerHTML = h + fab();
    bindChips(view.children[0], function (v) { f.cidade = v; render(); });
    document.getElementById("lg-cats").querySelectorAll("[data-cat]").forEach(function (b) { b.onclick = function () { f.cat = b.getAttribute("data-cat"); render(); }; });
    document.getElementById("lg-hide-done").onclick = function () { f.status = f.status === "aberto" ? "" : "aberto"; render(); };
    var q = document.getElementById("lg-q");
    q.oninput = debounce(function () { f.q = q.value; renderKeepFocus("lg-q"); }, 250);
    bindLugares();
    bindFab(function () { addOrEdit("lugares", F_LUGAR, null, "Adicionar lugar", { cidade: f.cidade || "toquio" }); });
    bindEmpty(function () { addOrEdit("lugares", F_LUGAR, null, "Adicionar lugar", { cidade: f.cidade || "toquio" }); });
  }
  function renderKeepFocus(id) {
    var el = document.getElementById(id);
    var pos = el ? el.selectionStart : 0;
    render();
    var n = document.getElementById(id);
    if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} }
  }
  function bindChips(container, cb) {
    container.querySelectorAll("[data-chip]").forEach(function (b) { b.onclick = function () { cb(b.getAttribute("data-chip")); }; });
  }
  function debounce(fn, ms) { var t; return function () { clearTimeout(t); t = setTimeout(fn, ms); }; }
  function fab() { return '<button class="btn-add-fab" id="fab" aria-label="Adicionar">+</button>'; }
  function bindFab(fn) { var f = document.getElementById("fab"); if (f) f.onclick = fn; }
  function emptyState(ico, msg, cta) {
    return '<div class="empty"><div class="e-ico">' + ico + "</div><p>" + esc(msg) + "</p>" + (cta ? '<button class="btn primary" id="empty-cta">' + esc(cta) + "</button>" : "") + "</div>";
  }
  function bindEmpty(fn) { var b = document.getElementById("empty-cta"); if (b) b.onclick = fn; }

  /* ----- CIDADE ----- */
  function rCidade(r) {
    var cid = r[1] || "toquio";
    titleEl.textContent = CIDADES[cid] || cid;
    var lugares = DB.lugares.filter(function (l) { return l.cidade === cid && l.status !== "descartar"; });
    var dias = DB.roteiro.filter(function (d) { return d.cidade === cid; });
    var reservas = DB.reservas.filter(function (x) { return x.cidade === cid; });
    var porCat = {};
    lugares.forEach(function (l) { (porCat[l.categoria || "confirmar"] = porCat[l.categoria || "confirmar"] || []).push(l); });

    var h = '<div class="hero"><h2>' + esc(CIDADES[cid]) + "</h2><p>" +
      (dias.length ? "No roteiro: " + dias.map(function (d) { return d.data.slice(8, 10); }).join(", ") + " de setembro" : "Sem dias definidos no roteiro ainda") +
      " · " + lugares.length + " lugares salvos</p></div>";

    if (reservas.length) {
      h += '<div class="section-label">Reservas aqui</div>';
      reservas.forEach(function (x) { h += '<div class="card"><div class="card-main"><div class="card-title">' + esc(x.nome) + '</div><div class="card-sub">' + fmtData(x.data) + (x.horario ? " · " + esc(x.horario) : "") + '</div><div class="badges">' + statusBadge(x.status, ST_RESERVA) + "</div></div></div>"; });
    }

    if (!lugares.length) {
      h += emptyState("⛩", "Estrutura pronta esperando seus achados de " + CIDADES[cid] + ". Adicione lugares, cafés, lojas e experiências — eles aparecem agrupados por categoria aqui.", "Adicionar lugar");
    } else {
      Object.keys(CAT_LUGAR).forEach(function (k) {
        if (!porCat[k]) return;
        h += '<div class="section-label">' + esc(CAT_LUGAR[k]) + "</div>";
        porCat[k].forEach(function (l) { h += lugarCard(l); });
      });
    }
    view.innerHTML = h + fab();
    bindLugares();
    bindFab(function () { addOrEdit("lugares", F_LUGAR, null, "Adicionar lugar em " + CIDADES[cid], { cidade: cid }); });
    bindEmpty(function () { addOrEdit("lugares", F_LUGAR, null, "Adicionar lugar em " + CIDADES[cid], { cidade: cid }); });
  }

  /* ----- COMPRAS ----- */
  function compraCard(c) {
    var done = c.status === "comprado";
    var badges = statusBadge(c.status, ST_COMPRA);
    if (c.categoria) badges += '<span class="badge">' + esc(CAT_COMPRA[c.categoria] || c.categoria) + "</span>";
    if (c.prioridade === "alta") badges += '<span class="badge b-accent">★</span>';
    var sub = [c.loja, c.faixaPreco].filter(Boolean).join(" · ");
    return '<div class="card"><div class="card-row">' +
      '<button class="check' + (done ? " on" : "") + '" data-cdone="' + c.id + '" aria-label="Marcar comprado">✓</button>' +
      '<div class="card-main"><div class="card-title' + (done ? " done" : "") + '">' + esc(c.item) + "</div>" +
      (sub ? '<div class="card-sub">' + esc(sub) + "</div>" : "") +
      '<div class="badges">' + badges + "</div>" +
      (c.link ? '<div class="linkrow"><a class="linkbtn" target="_blank" rel="noopener" href="' + esc(c.link) + '">Link ↗</a></div>' : "") +
      (c.observacoes ? '<div class="card-notes">' + esc(c.observacoes) + "</div>" : "") +
      "</div>" +
      '<button class="kebab" data-cmenu="' + c.id + '" aria-label="Opções">⋯</button></div></div>';
  }
  function rCompras() {
    titleEl.textContent = "Compras";
    var f = filters.compras;
    var items = DB.compras.filter(function (c) {
      if (f.cat && c.categoria !== f.cat) return false;
      if (f.status === "aberto" && (c.status === "comprado" || c.status === "desistir")) return false;
      if (f.q && (c.item + " " + (c.loja || "") + " " + (c.observacoes || "")).toLowerCase().indexOf(f.q.toLowerCase()) < 0) return false;
      return true;
    });
    items.sort(function (a, b) { var p = { alta: 0, media: 1, baixa: 2 }; return (p[a.prioridade] || 1) - (p[b.prioridade] || 1); });
    var cats = [{ v: "", t: "Tudo" }].concat(Object.keys(CAT_COMPRA).map(function (k) { return { v: k, t: CAT_COMPRA[k] }; }));
    var h = '<div class="searchbar"><input id="cp-q" type="search" placeholder="Buscar item…" value="' + esc(f.q) + '"></div>';
    h += '<div class="filters">' + cats.map(function (c) { return '<button class="chip' + (c.v === f.cat ? " on" : "") + '" data-cat="' + c.v + '">' + esc(c.t) + "</button>"; }).join("") + "</div>";
    h += '<div class="filters"><button class="chip' + (f.status === "aberto" ? " on" : "") + '" id="cp-hide">Esconder comprados</button><span class="chip" style="pointer-events:none">' + items.length + " itens</span></div>";
    h += '<div class="notice"><span>⚠️</span><div>Facas, perfumes e líquidos &gt;100ml: sempre na mala despachada. Eletrônicos: conferir voltagem (Japão = 100V) e cota da alfândega (US$ 1.000). Tax-free: passaporte físico, mínimo ¥5.000/loja.</div></div>';
    if (!items.length) h += emptyState("🛍", "Nada aqui com esses filtros.", "Adicionar item");
    else items.forEach(function (c) { h += compraCard(c); });
    view.innerHTML = h + fab();
    view.querySelectorAll("[data-cat]").forEach(function (b) { b.onclick = function () { f.cat = b.getAttribute("data-cat"); render(); }; });
    document.getElementById("cp-hide").onclick = function () { f.status = f.status === "aberto" ? "" : "aberto"; render(); };
    var q = document.getElementById("cp-q");
    q.oninput = debounce(function () { f.q = q.value; renderKeepFocus("cp-q"); }, 250);
    view.querySelectorAll("[data-cdone]").forEach(function (b) { b.onclick = function () { toggleDone("compras", b.getAttribute("data-cdone"), "comprado", "comprar"); }; });
    view.querySelectorAll("[data-cmenu]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var c = findItem("compras", b.getAttribute("data-cmenu"));
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { addOrEdit("compras", F_COMPRA, c, "Editar compra"); } },
          { icon: "↻", label: "Mudar status", fn: function () { cycleStatus("compras", c.id, ["pesquisar", "comprar", "comprado", "desistir"]); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () { removeItem("compras", c.id, c.item); } }
        ]);
      };
    });
    bindFab(function () { addOrEdit("compras", F_COMPRA, null, "Adicionar compra"); });
    bindEmpty(function () { addOrEdit("compras", F_COMPRA, null, "Adicionar compra"); });
  }

  /* ----- VOOS ----- */
  function rVoos() {
    titleEl.textContent = "Voos";
    var h = "";
    if (!DB.voos.length) h += emptyState("✈︎", "Nenhum voo cadastrado.", "Adicionar voo");
    DB.voos.forEach(function (v) {
      h += '<div class="card"><div class="card-row"><div class="card-main">' +
        '<div class="card-sub" style="margin-bottom:2px">' + esc(v.trecho) + " · " + esc(v.companhia) + " " + esc(v.numeroVoo) + "</div>" +
        '<div class="card-title" style="font-size:19px">' + esc((v.aeroportoOrigem || "").split(" ·")[0]) + " → " + esc((v.aeroportoDestino || "").split(" ·")[0]) + "</div>" +
        '<div class="card-sub">' + fmtData(v.data) + " · " + esc(v.horarioSaida) + " → " + esc(v.horarioChegada) + "</div>" +
        '<div class="badges">' + statusBadge(v.status, { confirmado: "Confirmado", checkin: "Check-in feito", verificar: "[A verificar]" }) +
        '<span class="badge">' + esc(v.aeroportoOrigem || "") + "</span><span class='badge'>" + esc(v.aeroportoDestino || "") + "</span>" +
        (v.assento ? '<span class="badge">assento: ' + esc(v.assento) + "</span>" : "") + "</div>" +
        (v.codigoReserva ? '<details class="code"><summary>Código de reserva</summary><div class="code-value">' + esc(v.codigoReserva) + "</div></details>" : "") +
        (v.observacoes ? '<div class="card-notes">' + esc(v.observacoes) + "</div>" : "") +
        (v.fonte ? '<div class="card-sub" style="margin-top:6px;font-size:11.5px">Fonte: ' + esc(v.fonte) + "</div>" : "") +
        "</div><button class='kebab' data-vmenu='" + v.id + "' aria-label='Opções'>⋯</button></div></div>";
    });
    h += '<div class="section-label">O que conferir antes de sair</div>' + accList([
      "Check-in online da Emirates (abre 48h antes)",
      "Passaporte + prints das reservas no celular",
      "Bagagem: 2×23kg despachadas + 10kg mão — pesar em casa",
      "Facas/líquidos/LP na mala despachada",
      "eSIM instalada (ativar ao chegar)",
      "Ienes em espécie ou plano de saque no 7-Eleven"
    ], "Checklist do embarque");
    h += accList([
      "Ida: conexão longa (8h40) em Dubai — dá para descansar com calma",
      "Volta: conexão de 5h — tranquila",
      "⚠️ A volta sai de NARITA (NRT T2), não de Haneda — N'EX ~1h de Tokyo Station + folga",
      "Chegada no Japão às 22:20 — imigração + malas + trem ≈ 1h30–2h até a cidade"
    ], "Conexões e chegada");
    view.innerHTML = h + fab();
    view.querySelectorAll("[data-vmenu]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var v = findItem("voos", b.getAttribute("data-vmenu"));
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { addOrEdit("voos", F_VOO, v, "Editar voo"); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () { removeItem("voos", v.id, v.trecho); } }
        ]);
      };
    });
    bindFab(function () { addOrEdit("voos", F_VOO, null, "Adicionar voo"); });
    bindEmpty(function () { addOrEdit("voos", F_VOO, null, "Adicionar voo"); });
  }
  function accList(items, title) {
    return '<details class="acc"><summary>' + esc(title) + '</summary><div class="acc-body"><ul>' + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div></details>";
  }

  /* ----- RESERVAS ----- */
  function reservaCard(x) {
    var badges = statusBadge(x.status, ST_RESERVA) + '<span class="badge">' + esc(x.tipo || "") + "</span>";
    if (x.cidade) badges += '<span class="badge">' + esc(CIDADES[x.cidade] || x.cidade) + "</span>";
    return '<div class="card"><div class="card-row"><div class="card-main">' +
      '<div class="card-title">' + esc(x.nome) + "</div>" +
      '<div class="card-sub">' + [fmtData(x.data), x.horario].filter(Boolean).join(" · ") + "</div>" +
      (x.endereco ? '<div class="card-sub">' + esc(x.endereco) + "</div>" : "") +
      '<div class="badges">' + badges + "</div>" +
      (x.codigoReserva ? '<details class="code"><summary>Código de reserva</summary><div class="code-value">' + esc(x.codigoReserva) + "</div></details>" : "") +
      '<div class="linkrow">' + (x.link ? '<a class="linkbtn" target="_blank" rel="noopener" href="' + esc(x.link) + '">Abrir ↗</a>' : "") + "</div>" +
      (x.notas ? '<div class="card-notes">' + esc(x.notas) + "</div>" : "") +
      ((x.fonte || x.documentoOrigem) ? '<div class="card-sub" style="margin-top:6px;font-size:11.5px">Fonte: ' + esc(x.fonte || x.documentoOrigem) + "</div>" : "") +
      "</div><button class='kebab' data-rmenu='" + x.id + "' aria-label='Opções'>⋯</button></div></div>";
  }
  function rReservas() {
    titleEl.textContent = "Reservas";
    var items = DB.reservas.slice().sort(function (a, b) { return (a.data || "9") < (b.data || "9") ? -1 : 1; });
    var pend = items.filter(function (x) { return ["confirmar", "pagar", "verificar"].indexOf(x.status) >= 0; });
    var h = "";
    if (pend.length) {
      h += '<div class="section-label">Para resolver (' + pend.length + ")</div>";
      pend.forEach(function (x) { h += reservaCard(x); });
      h += '<div class="section-label">Todas</div>';
    }
    items.filter(function (x) { return pend.indexOf(x) < 0; }).forEach(function (x) { h += reservaCard(x); });
    if (!items.length) h += emptyState("🎫", "Nenhuma reserva ainda.", "Adicionar reserva");
    view.innerHTML = h + fab();
    view.querySelectorAll("[data-rmenu]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var x = findItem("reservas", b.getAttribute("data-rmenu"));
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { addOrEdit("reservas", F_RESERVA, x, "Editar reserva"); } },
          { icon: "↻", label: "Mudar status", fn: function () { cycleStatus("reservas", x.id, ["reservado", "pagar", "confirmar", "usado", "cancelar", "verificar"]); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () { removeItem("reservas", x.id, x.nome); } }
        ]);
      };
    });
    bindFab(function () { addOrEdit("reservas", F_RESERVA, null, "Adicionar reserva"); });
    bindEmpty(function () { addOrEdit("reservas", F_RESERVA, null, "Adicionar reserva"); });
  }

  /* ----- FUJI ----- */
  function rFuji() {
    titleEl.textContent = "Monte Fuji";
    var fj = DB.fuji;
    var res = fj.resumo;
    var h = '<div class="hero"><h2>Yoshida Trail 🗻</h2><p>' + esc(res.datas) + " · Goraikō no cume</p></div>";

    h += '<div class="card"><div class="card-main">' +
      '<div class="badges" style="margin:0 0 10px">' +
      '<span class="badge b-info">' + esc(res.trilha) + '</span>' +
      '<span class="badge b-accent">' + esc(res.cabana) + "</span></div>" +
      '<div class="card-sub">' + esc(res.altitude) + "</div>" +
      '<div class="card-notes">⚠️ ' + esc(res.atencao) + "</div></div></div>";

    // status das reservas do Fuji
    var fujiRes = DB.reservas.filter(function (x) { return x.cidade === "fuji"; });
    h += '<div class="section-label">Reservas do Fuji</div>';
    fujiRes.forEach(function (x) { h += reservaCard(x); });

    h += '<div class="section-label">Linha do tempo</div><div class="card"><div class="timeline">';
    fj.timeline.forEach(function (t) {
      h += '<div class="tl-item"><div class="tl-hora">' + esc(t.hora) + '</div><div class="tl-titulo">' + esc(t.titulo) + '</div><div class="tl-detalhe">' + esc(t.detalhe) + "</div></div>";
    });
    h += "</div></div>";

    // equipamentos
    var pendEq = fj.equipamentos.filter(function (e) { return e.status !== "feito"; }).length;
    h += '<div class="section-label">Equipamentos (' + pendEq + " pendentes)</div>";
    var porGrupo = {};
    fj.equipamentos.forEach(function (e) { (porGrupo[e.grupo] = porGrupo[e.grupo] || []).push(e); });
    Object.keys(GRUPO_EQUIP).forEach(function (g) {
      if (!porGrupo[g]) return;
      h += '<details class="acc"><summary>' + esc(GRUPO_EQUIP[g]) + ' <span class="badge" style="margin-left:4px">' + porGrupo[g].length + "</span></summary><div class='acc-body'>";
      porGrupo[g].forEach(function (e) {
        h += '<div class="card" style="box-shadow:none;margin:8px 0"><div class="card-row">' +
          '<button class="check' + (e.status === "feito" ? " on" : "") + '" data-eqdone="' + e.id + '">✓</button>' +
          '<div class="card-main"><div class="card-title' + (e.status === "feito" ? " done" : "") + '" style="font-size:14.5px">' + esc(e.item) + "</div>" +
          '<div class="badges"><span class="badge b-info">' + esc(ORIGEM_EQUIP[e.origem] || e.origem) + "</span>" + (e.prioridade === "alta" ? '<span class="badge b-accent">★</span>' : "") + "</div>" +
          (e.observacao ? '<div class="card-notes">' + esc(e.observacao) + "</div>" : "") +
          "</div><button class='kebab' data-eqmenu='" + e.id + "' aria-label='Opções'>⋯</button></div></div>";
      });
      h += "</div></details>";
    });
    h += '<button class="btn block" id="add-equip" style="margin:4px 0 10px">+ Adicionar equipamento</button>';

    // aluguel
    var al = fj.aluguel;
    h += '<div class="section-label">Aluguel de equipamento</div><div class="card"><div class="card-row"><div class="card-main">' +
      '<div class="card-title">' + esc(al.loja) + "</div>" +
      '<div class="card-sub">Retirada: ' + esc(al.retirada) + "</div>" +
      '<div class="card-sub">Devolução: ' + esc(al.devolucao) + "</div>" +
      '<div class="badges">' + statusBadge(al.status, ST_TAREFA) + '<span class="badge">' + esc(al.preco) + "</span></div>" +
      '<div class="card-notes">Itens: ' + esc(al.itens) + "<br><br>Checklist na retirada: " + esc(al.checklistRetirada) + "<br><br>Regras: " + esc(al.regras) + "</div>" +
      "</div><button class='kebab' id='al-menu' aria-label='Opções'>⋯</button></div></div>";

    // saúde
    var s = fj.saude;
    h += '<div class="section-label">Altitude e segurança</div>';
    h += '<div class="notice info"><span>ⓘ</span><div>' + esc(s.avisoMedico) + "</div></div>";
    h += accList(s.reduzirRisco, "Como reduzir risco de mal de altitude");
    h += accList(s.sinaisAtencao, "Sinais para prestar atenção");
    h += accList(s.quandoParar, "Quando parar ou descer");
    h += accList(s.antesDaSubida, "O que fazer antes da subida");
    h += accList(s.verificarPerto, "O que verificar perto da viagem");
    h += '<p class="footer-note">Fontes: fujisan-climb.jp (oficial) e CDC Yellow Book. Detalhes em SOURCES.md.</p>';

    view.innerHTML = h;
    view.querySelectorAll("[data-eqdone]").forEach(function (b) {
      b.onclick = function () {
        var e = fj.equipamentos.find(function (x) { return x.id === b.getAttribute("data-eqdone"); });
        e.status = e.status === "feito" ? "pendente" : "feito";
        save(); render();
      };
    });
    view.querySelectorAll("[data-eqmenu]").forEach(function (b) {
      b.onclick = function (ev) {
        ev.stopPropagation();
        var e = fj.equipamentos.find(function (x) { return x.id === b.getAttribute("data-eqmenu"); });
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { openForm("Editar equipamento", F_EQUIP, e, function (d) { Object.assign(e, d); }); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () {
              if (!confirm("Excluir “" + e.item + "”?")) return;
              var idx = fj.equipamentos.indexOf(e);
              fj.equipamentos.splice(idx, 1);
              save(); render();
              toast("Excluído.", function () { fj.equipamentos.splice(idx, 0, e); save(); render(); });
            } }
        ]);
      };
    });
    var addEq = document.getElementById("add-equip");
    if (addEq) addEq.onclick = function () {
      openForm("Adicionar equipamento", F_EQUIP, null, function (d) { d.id = uid("fe"); fj.equipamentos.push(d); });
    };
    var alBtn = document.getElementById("al-menu");
    if (alBtn) alBtn.onclick = function (e) {
      e.stopPropagation();
      showMenu(alBtn, [{ icon: "✎", label: "Editar aluguel", fn: function () {
        openForm("Aluguel de equipamento", [
          { key: "loja", label: "Loja" }, { key: "retirada", label: "Retirada" }, { key: "devolucao", label: "Devolução" },
          { key: "preco", label: "Preço", half: 1 }, { key: "status", label: "Status", type: "select", opts: ST_TAREFA, half: 1 },
          { key: "link", label: "Link" }, { key: "itens", label: "Itens", type: "textarea" },
          { key: "regras", label: "Regras", type: "textarea" }, { key: "checklistRetirada", label: "Checklist de retirada", type: "textarea" }
        ], al, function (d) { Object.assign(al, d); });
      } }]);
    };
    view.querySelectorAll("[data-rmenu]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var x = findItem("reservas", b.getAttribute("data-rmenu"));
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { addOrEdit("reservas", F_RESERVA, x, "Editar reserva"); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () { removeItem("reservas", x.id, x.nome); } }
        ]);
      };
    });
  }

  /* ----- ANTES DE IR ----- */
  function rAntes() {
    titleEl.textContent = "Antes de ir";
    var items = DB.checklist.slice().sort(function (a, b) {
      if ((a.status === "feito") !== (b.status === "feito")) return a.status === "feito" ? 1 : -1;
      return (a.prazo || "9999") < (b.prazo || "9999") ? -1 : 1;
    });
    var pend = items.filter(function (t) { return t.status !== "feito"; }).length;
    var h = '<div class="notice info"><span>✓</span><div>' + pend + " tarefas pendentes. Toque no círculo para concluir.</div></div>";
    items.forEach(function (t) {
      var done = t.status === "feito";
      var atras = !done && t.prazo && diasAte(t.prazo) < 0;
      h += '<div class="card' + (atras ? " alertcard" : "") + '"><div class="card-row">' +
        '<button class="check' + (done ? " on" : "") + '" data-tdone="' + t.id + '">✓</button>' +
        '<div class="card-main"><div class="card-title' + (done ? " done" : "") + '">' + esc(t.titulo) + "</div>" +
        '<div class="card-sub">' + [t.categoria, t.prazo ? "até " + fmtData(t.prazo) : ""].filter(Boolean).join(" · ") + "</div>" +
        '<div class="badges">' + statusBadge(t.status, ST_TAREFA) + (t.prioridade === "alta" ? '<span class="badge b-accent">★</span>' : "") + (atras ? '<span class="badge b-warn">atrasado</span>' : "") + "</div>" +
        (t.link ? '<div class="linkrow"><a class="linkbtn" target="_blank" rel="noopener" href="' + esc(t.link) + '">Abrir ↗</a></div>' : "") +
        (t.observacoes ? '<div class="card-notes">' + esc(t.observacoes) + "</div>" : "") +
        "</div><button class='kebab' data-tmenu='" + t.id + "' aria-label='Opções'>⋯</button></div></div>";
    });
    view.innerHTML = h + fab();
    view.querySelectorAll("[data-tdone]").forEach(function (b) { b.onclick = function () { toggleDone("checklist", b.getAttribute("data-tdone"), "feito", "pendente"); }; });
    view.querySelectorAll("[data-tmenu]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var t = findItem("checklist", b.getAttribute("data-tmenu"));
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { addOrEdit("checklist", F_TAREFA, t, "Editar tarefa"); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () { removeItem("checklist", t.id, t.titulo); } }
        ]);
      };
    });
    bindFab(function () { addOrEdit("checklist", F_TAREFA, null, "Adicionar tarefa"); });
  }

  /* ----- DOCUMENTOS ----- */
  function rDocs() {
    titleEl.textContent = "Documentos";
    var h = '<div class="notice"><span>🔒</span><div>Este site não guarda arquivos — só referências de onde cada documento está. Mantenha os arquivos em si no iCloud/Arquivos com cópia offline.</div></div>';
    DB.documentos.forEach(function (d) {
      h += '<div class="card"><div class="card-row"><div class="card-main">' +
        '<div class="card-title">' + esc(d.nome) + "</div>" +
        '<div class="card-sub">' + esc(d.tipo || "") + "</div>" +
        '<div class="badges">' + statusBadge(d.status, ST_DOC) + "</div>" +
        (d.linkOuReferencia ? (/^https?:/.test(d.linkOuReferencia)
          ? '<div class="linkrow"><a class="linkbtn" target="_blank" rel="noopener" href="' + esc(d.linkOuReferencia) + '">Abrir ↗</a></div>'
          : '<details class="code"><summary>Onde está</summary><div class="code-value">' + esc(d.linkOuReferencia) + "</div></details>") : "") +
        (d.observacao ? '<div class="card-notes">' + esc(d.observacao) + "</div>" : "") +
        (d.fonte ? '<div class="card-sub" style="margin-top:6px;font-size:11.5px">Fonte: ' + esc(d.fonte) + "</div>" : "") +
        "</div><button class='kebab' data-dmenu='" + d.id + "' aria-label='Opções'>⋯</button></div></div>";
    });
    view.innerHTML = h + fab();
    view.querySelectorAll("[data-dmenu]").forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var d = findItem("documentos", b.getAttribute("data-dmenu"));
        showMenu(b, [
          { icon: "✎", label: "Editar", fn: function () { addOrEdit("documentos", F_DOC, d, "Editar documento"); } },
          { icon: "↻", label: "Mudar status", fn: function () { cycleStatus("documentos", d.id, ["pendente", "ok", "verificar"]); } },
          "hr",
          { icon: "🗑", label: "Excluir", danger: 1, fn: function () { removeItem("documentos", d.id, d.nome); } }
        ]);
      };
    });
    bindFab(function () { addOrEdit("documentos", F_DOC, null, "Adicionar documento"); });
  }

  /* ----- INFO ----- */
  function rInfo() {
    titleEl.textContent = "Informações";
    var i = DB.infoUteis;
    var h = '<div class="notice info"><span>ⓘ</span><div>Frases do dia a dia ficam na aba Frases. Aqui: emergência e guias rápidos.</div></div>';
    h += '<div class="section-label">Emergência</div>';
    i.emergencia.forEach(function (e) {
      h += '<div class="card"><div class="card-title" style="font-size:14.5px">' + esc(e.titulo) + '</div><div class="card-sub">' + esc(e.detalhe) + "</div></div>";
    });
    h += '<div class="section-label">Guias rápidos</div>';
    h += accList(i.transporte, "Transporte e IC card");
    h += accList(i.pagamentos, "Pagamentos e tax-free");
    h += accList(i.etiqueta, "Etiqueta");
    h += accList(i.lixo, "Lixo e reciclagem");
    h += accList(i.energia, "Tomadas e voltagem");
    h += accList(i.alfandega, "Alfândega, facas e bagagem");
    view.innerHTML = h;
  }

  /* ----- LINKS ----- */
  function rLinks() {
    titleEl.textContent = "Links rápidos";
    var h = "";
    DB.infoUteis.links.forEach(function (l) {
      h += '<div class="card"><div class="card-main"><div class="card-title" style="font-size:14.5px">' + esc(l.titulo) + "</div>" +
        (l.nota ? '<div class="card-sub">' + esc(l.nota) + "</div>" : "") +
        (l.url ? '<div class="linkrow"><a class="linkbtn" target="_blank" rel="noopener" href="' + esc(l.url) + '">Abrir ↗</a></div>' : "") +
        "</div></div>";
    });
    h += '<div class="section-label">Maps dos lugares prioritários</div>';
    DB.lugares.filter(function (l) { return l.prioridade === "alta" && l.status !== "feito" && l.status !== "descartar"; }).slice(0, 15).forEach(function (l) {
      h += '<div class="card"><div class="card-row"><div class="card-main"><div class="card-title" style="font-size:14.5px">' + esc(l.nome) + '</div><div class="card-sub">' + esc([l.bairro, CIDADES[l.cidade]].filter(Boolean).join(" · ")) + '</div></div><a class="linkbtn" target="_blank" rel="noopener" href="' + esc(mapsLink(l)) + '">Maps ↗</a></div></div>';
    });
    view.innerHTML = h;
  }

  /* ----- DADOS ----- */
  function rDados() {
    titleEl.textContent = "Dados";
    var h = '<div class="notice info"><span>ⓘ</span><div>Tudo fica salvo <b>neste navegador</b> (localStorage). Para levar os dados do Mac para o iPhone: exporte aqui, mande o arquivo para você (AirDrop/iCloud) e importe lá.</div></div>';
    h += '<div class="card"><div class="card-title">Exportar dados</div><div class="card-sub">Baixa um JSON com tudo: lugares, compras, roteiro, reservas, Fuji…</div><div style="margin-top:12px"><button class="btn primary block" id="btn-export">Exportar dados</button></div></div>';
    h += '<div class="card"><div class="card-title">Importar dados</div><div class="card-sub">Substitui os dados atuais pelos do arquivo. Faça um export antes, por garantia.</div><div style="margin-top:12px"><input type="file" id="file-import" accept=".json,application/json" hidden><button class="btn block" id="btn-import">Importar dados</button></div></div>';
    h += '<div class="card"><div class="card-title">Restaurar dados iniciais</div><div class="card-sub">Volta tudo para o conteúdo original do data.js. Suas edições serão perdidas.</div><div style="margin-top:12px"><button class="btn block" id="btn-reset" style="color:var(--accent)">Restaurar dados iniciais</button></div></div>';
    view.innerHTML = h;

    document.getElementById("btn-export").onclick = function () {
      var blob = new Blob([JSON.stringify(DB, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "japao-2026-dados-" + hoje() + ".json";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
      toast("Dados exportados ✓");
    };
    var fi = document.getElementById("file-import");
    document.getElementById("btn-import").onclick = function () { fi.click(); };
    fi.onchange = function () {
      var f = fi.files[0];
      if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var d = JSON.parse(rd.result);
          if (!d || !d.lugares || !d.compras) throw new Error("estrutura");
          if (!confirm("Substituir os dados atuais pelos do arquivo “" + f.name + "”?")) return;
          DB = d; save(); render();
          toast("Dados importados ✓");
        } catch (e) { toast("Arquivo inválido — precisa ser um export deste site."); }
      };
      rd.readAsText(f);
    };
    document.getElementById("btn-reset").onclick = function () {
      if (!confirm("Restaurar TODOS os dados iniciais? Suas edições serão perdidas.")) return;
      if (!confirm("Tem certeza? Essa ação não tem desfazer. (Dica: exporte antes.)")) return;
      DB = seed(); save(); render();
      toast("Dados iniciais restaurados ✓");
    };
  }

  /* ---------- boot ---------- */
  if (!location.hash) location.hash = "#/home";
  render();
  // Reforça a gravação da sincronização de dados novos um instante depois do carregamento inicial.
  setTimeout(function () { try { localStorage.setItem(LS_KEY, JSON.stringify(DB)); } catch (e) { /* ignore */ } }, 400);
})();
