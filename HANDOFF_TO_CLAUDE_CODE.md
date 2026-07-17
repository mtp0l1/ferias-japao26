# Handoff — Japão 2026 (v2)

## 1. O que existe

Site estático pessoal para organizar a viagem ao Japão (04–22/09/2026), mobile-first
para iPhone 15 Pro. Sem build, sem dependências, sem framework — HTML + CSS + JS vanilla.
V1 criada no Claude Cowork; **v2 = rodada de QA funcional + patch de bugs + polish mobile**
(detalhes em `CHECKLIST_QA.md`, seção "Rodada 2").

Seções: Hoje (home), Roteiro (19 dias), Lugares (76, filtros por cidade/categoria/busca),
Compras (59), Monte Fuji (timeline, equipamentos, aluguel, segurança), Voos (4 trechos
Emirates), Reservas (9), Documentos (7), Antes de ir (15 tarefas), Info úteis, Links, Dados
(export/import/restaurar).

## 2. Estrutura dos arquivos

| Arquivo | Função |
|---|---|
| `index.html` | casca do app (topbar, bottom nav, modal, sheet, toast) |
| `styles.css` | design system claro/escuro, tokens em `:root`, mobile-first |
| `app.js` | router por hash, renderers por seção, CRUD genérico, localStorage, export/import |
| `data.js` | `window.SEED_DATA` — **todos os dados iniciais**; editável à mão |
| `manifest.json` | instalação como app na tela de início do iPhone |
| `README.md` | como usar, editar dados, publicar |
| `CHECKLIST_QA.md` | QA das duas rodadas |
| `SOURCES.md` | fontes das informações |

Conceitos-chave do `app.js`:
- Dados vivem em `DB` (cópia do seed ou do localStorage, chave `japantrip-2026-v1`).
- Toda mutação → `save()` + `render()`. Render é innerHTML por rota + bind de handlers.
- Formulários são declarativos (`F_LUGAR`, `F_COMPRA`…) via `openForm`/`addOrEdit`.
- Exclusão sempre com `confirm()` + toast com Desfazer (6s).

## 3. Como rodar/testar

- Duplo clique em `index.html` funciona (sem fetch de dados), ou
- `python3 -m http.server 8000` na pasta → `http://localhost:8000`.
- QA manual de 2 min: ver "Teste manual recomendado" no `CHECKLIST_QA.md`.

Deploy no Vercel: repo privado → Add New Project → framework **Other** → deploy sem build.
**Ativar Deployment Protection** — o `data.js` tem códigos de reserva e itinerário reais.

## 4. Pendências (dados, não código)

Tudo que está incerto usa `[A VERIFICAR]` / `[A DEFINIR]` no `data.js` — nada foi inventado.
Principais: códigos de reserva Emirates e assentos; hospedagens das 4 bases; loja de aluguel
de equipamento do Fuji (La Mont vs Yamarent) e preço; endereços de vários restaurantes/cafés;
ingresso do sumô (vendas abrem 08/08); dias livres do roteiro (12, 15, 17–19/09).

## 5. Bugs conhecidos

- Marcar equipamento do Fuji re-renderiza e fecha o acordeão do grupo (cosmético).
- O fechamento do menu ⋯ ao rolar depende do evento `scroll` (padrão em Safari/Chrome
  reais; a emulação usada no QA não dispara scroll programático — não reproduzível lá).
- Sem service worker → primeiro load exige rede (decisão consciente, ver README).

## 6. Melhorias recomendadas para a próxima rodada

1. **Ícone apple-touch-icon PNG 180×180** — iOS ignora o ícone SVG do manifest; hoje a
   tela de início usa screenshot da página.
2. Service worker cache-first opcional para offline real durante a viagem (com estratégia
   de invalidação simples).
3. Preservar acordeão aberto ao marcar equipamento do Fuji (guardar estado `open` antes
   do render).
4. Swipe-back ou transição entre rotas (hoje é fade-in simples).
5. Busca global (hoje a busca é por seção).
6. Na home, atalho direto para o dia atual do roteiro fora do período da viagem
   ("próximo dia planejado").
