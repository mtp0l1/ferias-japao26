# QA — Japão 2026

## Verificado automaticamente (Node)

- [x] `app.js` e `data.js` sem erro de sintaxe (`node --check`)
- [x] IDs únicos em todas as coleções (0 duplicados)
- [x] Categorias de lugares e compras todas válidas no vocabulário do app
- [x] **81 itens** da lista original de Tóquio presentes → 76 cards (5 fusões de duplicados,
      todas documentadas no campo `nomeOriginal`/`notas`: Senso-ji ×2, Nakamise ×2,
      Kappabashi ×2, Tsukiji ×2, Tsutaya Books→Daikanyama T-Site)
- [x] **57 itens** da lista original de compras presentes (+2 derivados: games retrô,
      Shiroi Koibito) — conferência automatizada item a item
- [x] Todos os `getElementById` do app.js resolvem para IDs existentes
- [x] Correção aplicada: `[hidden]{display:none!important}` (modal não abre sozinho no load)

## Verificado por revisão de código

- [x] Navegação: 15 rotas renderizam (home, roteiro, lugares, 3 cidades, compras, voos,
      reservas, fuji, antes, documentos, info, links, dados)
- [x] CRUD completo: lugares, compras, tarefas, reservas, documentos, voos, equipamentos
      do Fuji, dias do roteiro (adicionar onde faz sentido; editar/excluir em tudo)
- [x] Excluir sempre pede confirmação + toast com **Desfazer** (6s)
- [x] Restaurar dados iniciais pede confirmação dupla
- [x] localStorage: salva a cada mutação; seed usado no primeiro acesso
- [x] Exportar JSON (download) / Importar JSON (com validação de estrutura + confirmação)
- [x] Feedback visual (toast) ao salvar, excluir, marcar feito, importar, exportar, restaurar
- [x] Códigos de reserva escondidos em `<details>` — não aparecem na home
- [x] Dados dos voos extraídos do itinerário Emirates; Kamaiwakan e permit extraídos dos
      comprovantes; fonte anotada em cada card
- [x] Área Fuji: resumo, timeline (10 passos), reservas, 20 equipamentos em 12 grupos,
      aluguel, 5 blocos de altitude/segurança com aviso não-prescritivo
- [x] Osaka e Kyoto: templates com empty state e botão "Adicionar lugar" (Kyoto já tem
      Nishiki Market, movido da lista de Tóquio com nota)
- [x] `prefers-reduced-motion` desativa todas as animações/transições
- [x] Dark mode automático (prefers-color-scheme) + toggle manual persistido
- [x] Placeholders [A VERIFICAR]/[A DEFINIR] em todo dado incerto — nada inventado

## Mobile (iPhone 15 Pro)

- [x] Layout single-column ≤640px, max-width 640px centrado no desktop
- [x] Bottom nav fixa com 5 destinos + sheet "Mais"; safe-area-inset respeitado
- [x] Alvos de toque ≥44px nos controles primários (FAB 54px, botões 46px, check 26px
      com padding do card em volta)
- [x] Ações secundárias no menu ⋯ (não poluem o card)
- [x] Formulários em bottom-sheet com campos grandes; textos com overflow-wrap
- [x] `font-size` dos inputs ≥16px (evita zoom automático do iOS)

## Teste manual recomendado (2 min, no navegador)

1. Abrir `index.html` → home mostra countdown e resumos
2. Lugares → filtrar por categoria, buscar, marcar um como feito, editar, excluir + desfazer
3. Mais → Dados → Exportar → Importar o mesmo arquivo → Restaurar iniciais
4. Ativar "Reduzir movimento" no sistema e conferir que animações somem

## Limitações conhecidas

- Sem service worker (decisão consciente — ver README); requer rede no primeiro load
- Marcar equipamento do Fuji re-renderiza e fecha o acordeão do grupo
- Smoke test com jsdom não rodou no ambiente de build (sem acesso ao npm registry);
  compensado com verificação estática + revisão linha a linha

---

## Rodada 2 (v2) — QA no browser real + patch

**Como foi testado:** site servido com `python3 -m http.server 8123` e exercitado num
Chromium controlado, viewport 375×812 (iPhone 15 Pro) e desktop 1600px, light e dark.
CRUD testado de ponta a ponta via UI (adicionar → renderizar → excluir → desfazer/toast),
overflow horizontal medido programaticamente em **14 rotas** (0 px em todas).

### Bugs encontrados e corrigidos

- [x] **Menu ⋯ abria fora da tela com a página rolada** — `.menu` usava `position:absolute`
      com coordenadas de viewport (`getBoundingClientRect`). Reproduzido: com scroll de
      800px o menu abria em top −334px. Corrigido para `position:fixed` + listener de
      scroll que fecha o menu.
- [x] **Editar lugar perdia a flag "Precisa reservar"** — o seed usa boolean `true`, o
      select do formulário só conhecia `"sim"/""`; ao salvar, a flag era zerada em
      silêncio. Corrigido normalizando boolean → `"sim"` no render do campo.
- [x] **`hoje()` usava UTC** (`toISOString`) — no Brasil à noite ou no Japão de manhã o
      "dia de hoje" saía errado (afeta o card "Hoje" e o destaque do dia durante a
      viagem). Corrigido para data local.
- [x] Contadores da home hardcoded ("19 dias", "4 trechos") → agora derivados de
      `DB.roteiro.length` / `DB.voos.length`.
- [x] Voos sem empty state se a lista esvaziasse → adicionado.
- [x] `theme-color` (cor da barra do iOS) não acompanhava o toggle manual de tema → sincronizado.
- [x] Kebabs sem `aria-label` em equipamentos, tarefas, documentos e aluguel → adicionados.

### Melhorias de UI/toque

- [x] Área de toque de ✓ e ⋯ ampliada para ≥44px via pseudo-elemento (visual inalterado)
- [x] `.linkbtn` com min-height 32px e padding maior
- [x] Item ativo da bottom nav agora usa a cor de destaque (mais legível de relance)
- [x] Desktop: bottom nav centralizada (max-width 560px) e FAB alinhado à coluna de conteúdo
- [x] `overflow-x:hidden` no body como guarda

### Reverificado após o patch

- [x] `node --check` em app.js e data.js
- [x] CRUD de lugares (add/edit/delete/undo) via UI real
- [x] Menu ⋯ abre colado ao botão mesmo com scroll (delta 6px)
- [x] Edição de "Sushi Kidoguchi" agora mostra "Precisa reservar? Sim"
- [x] Dados intactos: 76 lugares, 59 compras, 15 tarefas, 4 voos, 9 reservas, 7 documentos
- [x] Sem overflow horizontal em nenhuma rota (mobile 375px)
- [x] Códigos de reserva continuam discretos (expansível fechado por padrão)
