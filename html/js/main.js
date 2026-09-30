// ======================================================
// RESGATE DE ANIMAIS
// EXPERIÊNCIA PRÁTICA IV
// JAVASCRIPT
// ======================================================


// ======================================================
// IMPORTAÇÕES
// ======================================================

import {

    configurarMenu,

    configurarModal,

    configurarModoContraste,

    mostrarToast,

    abrirModal

} from "./ui.js";


import {

    renderizarRota

} from "./rotas.js";


// ======================================================
// ELEMENTO PRINCIPAL
// ======================================================

const app =
    document.querySelector("#app");


// ======================================================
// ATUALIZA A TELA
// ======================================================

function atualizarTela() {

    if (!app) {

        return;

    }


    renderizarRota({

        app,

        mostrarToast,

        abrirModal

    });

}


// ======================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ======================================================

function iniciarAplicacao() {

    if (!app) {

        return;

    }


    configurarMenu();


    configurarModal();


    configurarModoContraste();


    atualizarTela();

}


// ======================================================
// ALTERAÇÃO DAS ROTAS
// ======================================================

window.addEventListener(

    "hashchange",

    atualizarTela

);


// ======================================================
// INICIAR APLICAÇÃO
// ======================================================

iniciarAplicacao();