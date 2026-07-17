# Japão 2026 — site pessoal da viagem

Site estático, mobile-first, para organizar a viagem ao Japão (04–22/09/2026).
Feito para uso no iPhone 15 Pro durante a viagem; desktop funciona para revisão.

## ⚠️ Privacidade — leia antes de publicar

Este site contém **dados pessoais reais**: códigos de reserva (Kamaiwakan, permit do Fuji, Nintendo Museum), itinerário de voos e nome do viajante. Eles estão em `data.js`.

- **Não publique em URL pública** sem antes remover/trocar os códigos em `data.js`, **ou**
- proteja o deploy (Vercel: *Deployment Protection* → Password/Vercel Authentication), **ou**
- use uma URL não listada e aceite o risco (não recomendado).
- No site, códigos ficam escondidos em "Código de reserva" (expansível) — discreto, mas não é criptografia.

## Como usar localmente

Basta abrir `index.html` no navegador (duplo clique funciona — não há build nem dependências).
Se preferir servidor local: `python3 -m http.server 8000` na pasta e abrir `http://localhost:8000`.

## Como editar os dados

**Pelo site (recomendado):** todo item tem menu `⋯` com Editar/Excluir; botão `+` adiciona.
As alterações ficam salvas no navegador (localStorage) — **por aparelho**.

**Pelo data.js:** edite o arquivo e use *Mais → Dados → Restaurar dados iniciais* para recarregar
(atenção: isso descarta as edições feitas pelo site).

**Entre aparelhos (Mac → iPhone):** *Mais → Dados → Exportar dados* baixa um JSON.
Mande para o iPhone (AirDrop/iCloud) e use *Importar dados* lá. Importar substitui tudo.

> Limitação do localStorage: os dados vivem no navegador daquele aparelho. Se limpar dados
> do Safari/Chrome, as edições somem — exporte um backup de vez em quando. O conteúdo
> inicial do `data.js` nunca se perde.

## Estrutura

| Arquivo | Função |
|---|---|
| `index.html` | casca do app (topbar, bottom nav, modal, sheet) |
| `styles.css` | design system (claro/escuro, mobile-first) |
| `app.js` | rotas, renderização, CRUD, localStorage, export/import |
| `data.js` | **todos os dados iniciais** — lugares, compras, voos, reservas, roteiro, Fuji, info úteis |
| `manifest.json` | permite "Adicionar à Tela de Início" no iPhone (abre sem barra do Safari) |
| `SOURCES.md` | fontes das informações pesquisadas |
| `CHECKLIST_QA.md` | verificação de qualidade (v1 + rodada 2) |
| `HANDOFF_TO_CLAUDE_CODE.md` | estado do projeto, pendências e próximos passos |

**PWA/offline:** não há service worker de propósito — cache offline desatualizado durante a
viagem seria pior que depender de rede (o site é leve). O `manifest.json` já permite instalar
como app. Se quiser offline de verdade depois: adicionar um `service-worker.js` cache-first
simples para os 4 arquivos, com atenção a invalidação de cache ao editar o `data.js`.

## Deploy no Vercel

1. Suba a pasta para um repositório **privado** no GitHub.
2. No Vercel: *Add New Project* → importe o repo → framework **Other** → deploy (sem build).
3. Ative *Deployment Protection* (Settings → Deployment Protection) por causa dos dados pessoais.
4. Alternativa sem GitHub: `npx vercel` dentro da pasta.

## No iPhone

Abra a URL no Safari → Compartilhar → **Adicionar à Tela de Início**. O site abre em tela
cheia, com dark mode automático e navegação inferior na área do polegar.
