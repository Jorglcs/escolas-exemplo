# Horizonte — Escola de Educação Infantil

Home page institucional fictícia em **React 19, JavaScript e Vite 7**. Identidade colorida, proposta pedagógica, turmas filtráveis, rotina, depoimentos, FAQ e simulação de agendamento de visita.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```bash
npm ci
npm run dev
```

## Produção

```bash
npm run build
npm run preview
```

Publique a pasta `dist/` em um serviço de hospedagem estática. Caminhos relativos permitem publicação em subdiretórios. O site não requer backend, banco de dados nem variáveis de ambiente.

## Personalizar

- `src/main.jsx`: conteúdo, turmas, horários, preços, perguntas e formulário.
- `src/style.css`: cores, tipografia, layouts e animações.
- `public/images/`: fotografias incluídas no repositório.
- `public/favicon.svg` e `index.html`: identidade e metadados.

Menu mobile, filtros de turmas, perguntas expansíveis, navegação por âncoras, transições de entrada, navegação por teclado, link de pular conteúdo e respeito a `prefers-reduced-motion`.

O formulário é apenas uma **simulação**: valida campos e exibe uma mensagem local. Não agenda visita, envia e-mail nem armazena informações. A marca, estrutura, proposta, depoimentos, horários e valores são fictícios e devem ser substituídos antes de uso real.

## Imagens e fontes

Fotografias ilustrativas do [Unsplash](https://unsplash.com/license), incluídas localmente:

- Capa: `photo-1503454537195-1dcabb73ffb9`.
- Espaço de brincar: `photo-1596464716127-f2a82984de30`.
- Berçário: `photo-1515488042361-ee00e0ddd4e4`.
- Arte: `photo-1513364776144-60967b0f800f`.
- Sala de aula: `photo-1580582932707-520aed937b7b`.

DM Sans e Manrope são carregadas pelo Google Fonts, com fontes de sistema como alternativa. As fotografias não representam uma escola real chamada Horizonte.
