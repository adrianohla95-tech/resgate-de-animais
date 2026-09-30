// ======================================================
// UI
// Menu, modal, toast e alto contraste
// ======================================================


// ======================================================
// TOAST
// ======================================================

let tempoToast;


export function mostrarToast(mensagem) {

    const toast =
        document.querySelector("#toast");


    if (!toast) {
        return;
    }


    clearTimeout(tempoToast);


    toast.textContent =
        mensagem;


    toast.classList.add(
        "mostrar"
    );


    tempoToast =
        setTimeout(function () {

            toast.classList.remove(
                "mostrar"
            );

        }, 3000);

}


// ======================================================
// ABRIR MODAL
// ======================================================

export function abrirModal(
    titulo,
    texto
) {

    const modal =
        document.querySelector("#modal");


    const modalTitulo =
        document.querySelector("#modalTitulo");


    const modalTexto =
        document.querySelector("#modalTexto");


    if (
        !modal ||
        !modalTitulo ||
        !modalTexto
    ) {

        return;

    }


    modalTitulo.textContent =
        titulo;


    modalTexto.innerHTML = `

        <p>
            ${texto}
        </p>

        <span class="badge">
            ONG ativa
        </span>

    `;


    modal.classList.add(
        "mostrar"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );

}


// ======================================================
// FECHAR MODAL
// ======================================================

export function fecharModal() {

    const modal =
        document.querySelector("#modal");


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "mostrar"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


// ======================================================
// MENU
// ======================================================

export function configurarMenu() {

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );


    const nav =
        document.querySelector(
            "#menu"
        );


    if (
        !menuToggle ||
        !nav
    ) {

        return;

    }


    menuToggle.addEventListener(
        "click",
        function () {


            const menuAberto =
                nav.classList.toggle(
                    "active"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                String(menuAberto)
            );


            menuToggle.setAttribute(
                "aria-label",
                menuAberto
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        }
    );


    nav.addEventListener(
        "click",
        function () {

            nav.classList.remove(
                "active"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }
    );

}


// ======================================================
// EVENTOS DO MODAL
// ======================================================

export function configurarModal() {

    const modal =
        document.querySelector(
            "#modal"
        );


    const fechar =
        document.querySelector(
            "#fecharModal"
        );


    if (fechar) {

        fechar.addEventListener(
            "click",
            fecharModal
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    fecharModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                fecharModal();

            }

        }
    );

}


// ======================================================
// ALTO CONTRASTE
// ======================================================

export function configurarModoContraste() {

    const btnContraste =
        document.querySelector(
            "#btnContraste"
        );


    if (!btnContraste) {
        return;
    }


    const contrasteSalvo =
        localStorage.getItem(
            "modoAltoContraste"
        );


    const contrasteAtivado =
        contrasteSalvo === "true";


    aplicarModoContraste(
        contrasteAtivado
    );


    btnContraste.addEventListener(
        "click",
        function () {


            const ativado =
                !document.body.classList.contains(
                    "alto-contraste"
                );


            aplicarModoContraste(
                ativado
            );


            localStorage.setItem(
                "modoAltoContraste",
                String(ativado)
            );


            mostrarToast(

                ativado
                    ? "Modo de alto contraste ativado."
                    : "Modo de alto contraste desativado."

            );

        }
    );

}


// ======================================================
// APLICAR CONTRASTE
// ======================================================

function aplicarModoContraste(
    ativado
) {

    const btnContraste =
        document.querySelector(
            "#btnContraste"
        );


    document.body.classList.toggle(
        "alto-contraste",
        ativado
    );


    if (btnContraste) {

        btnContraste.setAttribute(
            "aria-pressed",
            String(ativado)
        );


        btnContraste.textContent =

            ativado
                ? "Desativar alto contraste"
                : "Alto contraste";

    }

}