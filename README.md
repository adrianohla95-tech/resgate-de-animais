# Resgate de Animais

Projeto desenvolvido para a faculdade com o objetivo de apresentar uma proposta de site para uma ONG de resgate, proteção e cuidado de animais.

## Sobre o projeto

O projeto "Resgate de Animais" apresenta informações sobre ações de resgate, voluntariado e doações.

A aplicação foi desenvolvida utilizando HTML, CSS e JavaScript, com navegação em formato de SPA (Single Page Application), utilizando rotas por hash.

O projeto também possui recursos de acessibilidade, armazenamento de dados no navegador e organização modular do JavaScript.

## Funcionalidades

- Página inicial da ONG;
- Navegação entre Início, Projetos e Cadastro;
- Sistema de rotas utilizando hash;
- Menu de navegação;
- Cadastro de colaboradores;
- Validação dos campos do formulário;
- Armazenamento dos dados utilizando localStorage;
- Modal para apresentação de informações;
- Mensagens de feedback ao usuário;
- Modo de alto contraste;
- Navegação utilizando teclado;
- Uso de elementos HTML semânticos;
- Recursos WAI-ARIA para acessibilidade;
- Layout responsivo;
- Imagens relacionadas ao projeto.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Vite
- Node.js
- localStorage
- SweetAlert2

## Estrutura do projeto

```text
Faculdade Projetos/
│
├── html/
│   ├── css/
│   │   └── style.css
│   │
│   ├── imagens/
│   │   └── cachorro.png
│   │
│   ├── public/
│   │   └── imagens/
│   │       └── cachorro.png
│   │
│   ├── js/
│   │   ├── eventos/
│   │   │   ├── cadastro.js
│   │   │   ├── inicio.js
│   │   │   └── projetos.js
│   │   │
│   │   ├── views/
│   │   │   ├── cadastro.js
│   │   │   ├── inicio.js
│   │   │   └── projetos.js
│   │   │
│   │   ├── dados.js
│   │   ├── main.js
│   │   ├── rotas.js
│   │   └── ui.js
│   │
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
│
├── imagens/
│   ├── cachorro.png
│   └── cachorro.svg
│
├── dist/
├── node_modules/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js