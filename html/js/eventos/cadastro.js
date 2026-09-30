// ======================================================
// EVENTOS - CADASTRO
// ======================================================

export function configurarEventosCadastro({
    mostrarToast
}) {

    const formulario =
        document.querySelector("#formCadastro");


    if (!formulario) {
        return;
    }


    const sucesso =
        document.querySelector(
            "#mensagem-sucesso"
        );


    const erro =
        document.querySelector(
            "#mensagem-erro"
        );


    // Recupera cadastro salvo
    const dadosSalvos =
        localStorage.getItem(
            "cadastroResgateAnimais"
        );


    if (dadosSalvos) {

        try {

            const dados =
                JSON.parse(dadosSalvos);


            formulario.nome.value =
                dados.nome || "";


            formulario.cpf.value =
                dados.cpf || "";


            formulario.email.value =
                dados.email || "";


            formulario.nascimento.value =
                dados.nascimento || "";


            formulario.endereco.value =
                dados.endereco || "";


            formulario.bairro.value =
                dados.bairro || "";


            formulario.cidade.value =
                dados.cidade || "";


            formulario.estado.value =
                dados.estado || "";


            formulario.cep.value =
                dados.cep || "";


            formulario.telefone.value =
                dados.telefone || "";


        } catch (erroParse) {

            localStorage.removeItem(
                "cadastroResgateAnimais"
            );

        }

    }


    // Evento de envio do formulário
    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Verifica os campos
            if (!formulario.checkValidity()) {

                if (erro) {
                    erro.style.display =
                        "block";
                }


                if (sucesso) {
                    sucesso.style.display =
                        "none";
                }


                formulario.reportValidity();

                return;
            }


            // Cria o objeto com os dados
            const dados = {

                nome:
                    formulario.nome.value.trim(),

                cpf:
                    formulario.cpf.value.trim(),

                email:
                    formulario.email.value.trim(),

                nascimento:
                    formulario.nascimento.value,

                endereco:
                    formulario.endereco.value.trim(),

                bairro:
                    formulario.bairro.value.trim(),

                cidade:
                    formulario.cidade.value.trim(),

                estado:
                    formulario.estado.value.trim(),

                cep:
                    formulario.cep.value.trim(),

                telefone:
                    formulario.telefone.value.trim()

            };


            // Salva no navegador
            localStorage.setItem(
                "cadastroResgateAnimais",
                JSON.stringify(dados)
            );


            if (sucesso) {

                sucesso.style.display =
                    "block";

            }


            if (erro) {

                erro.style.display =
                    "none";

            }


            // SweetAlert
            if (typeof Swal !== "undefined") {

                Swal.fire({

                    title:
                        "Cadastro realizado!",

                    text:
                        "Os dados foram salvos no navegador.",

                    icon:
                        "success",

                    confirmButtonText:
                        "OK"

                });

            }


            mostrarToast(
                "Cadastro salvo no navegador!"
            );

        }
    );

}