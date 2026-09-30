// ======================================================
// VIEW - CADASTRO
// ======================================================

export function renderCadastro() {

    return `

        <section>

            <h2>
                Cadastro de Colaborador
            </h2>


            <p>
                Preencha seus dados para participar
                das ações e apoiar o trabalho da ONG.
            </p>


            <form id="formCadastro">

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>


                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        pattern="[A-Za-zÀ-ÿ ]+"
                        required
                    >


                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                        maxlength="14"
                        required
                    >


                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >


                    <label for="nascimento">
                        Data de nascimento:
                    </label>

                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>
                        Endereço
                    </legend>


                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                    >


                    <label for="bairro">
                        Bairro:
                    </label>

                    <input
                        type="text"
                        id="bairro"
                        name="bairro"
                        required
                    >


                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        pattern="[A-Za-zÀ-ÿ ]+"
                        required
                    >


                    <label for="estado">
                        Estado:
                    </label>

                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        pattern="[A-Za-zÀ-ÿ ]+"
                        required
                    >


                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        maxlength="9"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>
                        Contato
                    </legend>


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                        maxlength="15"
                        required
                    >

                </fieldset>


                <button
                    class="botao"
                    type="submit"
                >
                    Enviar cadastro
                </button>


                <p
                    id="mensagem-sucesso"
                    class="feedback sucesso"
                    role="status"
                >
                    Cadastro enviado com sucesso!
                </p>


                <p
                    id="mensagem-erro"
                    class="feedback erro"
                    role="alert"
                >
                    Preencha os campos corretamente.
                </p>

            </form>

        </section>

    `;
}