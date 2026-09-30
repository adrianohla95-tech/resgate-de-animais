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
├── css/
│   └── style.css
│
├── html/
│   ├── css/
│   ├── imagens/
│   ├── public/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
│
├── imagens/
│   ├── cachorro.png
│   └── cachorro.svg
│
├── js/
│   ├── eventos/
│   │   ├── cadastro.js
│   │   ├── inicio.js
│   │   └── projetos.js
│   │
│   ├── views/
│   │   ├── cadastro.js
│   │   ├── inicio.js
│   │   └── projetos.js
│   │
│   ├── dados.js
│   ├── main.js
│   ├── rotas.js
│   └── ui.js
│
├── dist/
├── node_modules/
├── package-lock.json
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
## Versionamento e commits semânticos

O projeto utiliza versionamento semântico para identificar suas versões.

O formato utilizado é:

`MAJOR.MINOR.PATCH`

Exemplo:

`1.0.0`

- **MAJOR**: alterações que podem quebrar a compatibilidade do projeto.
- **MINOR**: adição de novas funcionalidades.
- **PATCH**: correções e ajustes sem alterar as funcionalidades existentes.

Também são utilizados commits semânticos para manter o histórico do projeto organizado.

Exemplos:

- `feat:` nova funcionalidade.
- `fix:` correção de erro.
- `docs:` alteração na documentação.
- `refactor:` melhoria ou reorganização do código.
- `style:` alterações de formatação ou estilo.
- `chore:` tarefas de manutenção.

Exemplo de commit:

`feat: adicionar formulário de cadastro`

Exemplo de release:

`v1.0.0`
## Fluxo de desenvolvimento

O projeto utiliza GitFlow para organização das branches:

- `main`: versão principal e estável do projeto.
- `develop`: branch de desenvolvimento.
- `feature/`: branches utilizadas para novas funcionalidades ou melhorias.
