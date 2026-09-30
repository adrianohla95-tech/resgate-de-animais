// ======================================================
// EVENTOS - PROJETOS
// ======================================================

export function configurarEventosProjetos({
    abrirModal
}) {

    const botoes =
        document.querySelectorAll(
            ".btn-projeto"
        );


    botoes.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const titulo =
                    botao.dataset.titulo;


                let texto = "";


                if (
                    titulo ===
                    "Resgate de Animais"
                ) {

                    texto =
                        "Ações de resgate e proteção para animais em situação de abandono ou risco.";

                }


                else if (
                    titulo ===
                    "Voluntariado"
                ) {

                    texto =
                        "Pessoas interessadas podem participar das ações e ajudar nos cuidados dos animais.";

                }


                else if (
                    titulo ===
                    "Doação"
                ) {

                    texto =
                        "As doações ajudam com alimentação, cuidados veterinários e atendimento dos animais.";

                }


                abrirModal(
                    titulo,
                    texto
                );

            }
        );

    });

}