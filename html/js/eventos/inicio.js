// ======================================================
// EVENTOS - INÍCIO
// ======================================================

export function configurarEventosInicio({
    mostrarToast,
    abrirModal
}) {

    const btnToast =
        document.querySelector("#btnToast");


    if (btnToast) {

        btnToast.addEventListener(
            "click",
            function () {

                mostrarToast(
                    "Ação realizada com sucesso!"
                );

            }
        );

    }


    const btnModal =
        document.querySelector("#btnModal");


    if (btnModal) {

        btnModal.addEventListener(
            "click",
            function () {

                abrirModal(
                    "Resgate de Animais",
                    "Nosso objetivo é ajudar animais que precisam de proteção, cuidados e um lar responsável."
                );

            }
        );

    }

}