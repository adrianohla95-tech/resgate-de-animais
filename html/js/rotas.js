// ======================================================
// ROTAS
// ======================================================

import {
    renderInicio
} from "./views/inicio.js";


import {
    renderProjetos
} from "./views/projetos.js";


import {
    renderCadastro
} from "./views/cadastro.js";


import {
    configurarEventosInicio
} from "./eventos/inicio.js";


import {
    configurarEventosProjetos
} from "./eventos/projetos.js";


import {
    configurarEventosCadastro
} from "./eventos/cadastro.js";


// ======================================================
// DESCOBRIR A ROTA ATUAL
// ======================================================

export function obterRota() {

    const rota =
        location.hash.replace(
            "#",
            ""
        ) || "inicio";


    if (
        rota === "projetos"
    ) {

        return "projetos";

    }


    if (
        rota === "cadastro"
    ) {

        return "cadastro";

    }


    return "inicio";

}


// ======================================================
// RENDERIZAR A ROTA
// ======================================================

export function renderizarRota({

    app,

    mostrarToast,

    abrirModal

}) {

    const rota =
        obterRota();


    if (
        rota === "projetos"
    ) {

        app.innerHTML =
            renderProjetos();


        configurarEventosProjetos({

            abrirModal

        });

    }


    else if (
        rota === "cadastro"
    ) {

        app.innerHTML =
            renderCadastro();


        configurarEventosCadastro({

            mostrarToast

        });

    }


    else {

        app.innerHTML =
            renderInicio();


        configurarEventosInicio({

            mostrarToast,

            abrirModal

        });

    }


    return rota;

}