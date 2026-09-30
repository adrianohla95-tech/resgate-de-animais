// ======================================================
// VIEW - INÍCIO
// ======================================================

export function renderInicio() {

    return `

        <section>

            <h2>
                Vamos resgatar e cuidar juntos
            </h2>


            <p>
                Somos uma iniciativa dedicada ao
                resgate, cuidado e proteção de animais.
            </p>


            <span class="badge">
                Projeto ativo
            </span>


            <div class="alerta">

                <strong>
                    Importante:
                </strong>

                Estamos recebendo voluntários
                para ajudar nas ações de resgate
                e proteção animal.

            </div>


            <img
                src="/imagens/cachorro.png"
                alt="Cachorro da ONG Resgate de Animais"
                width="350"
            >


            <div class="acoes">

                <button
                    class="botao"
                    id="btnToast"
                    type="button"
                >
                    Quero conhecer a ONG
                </button>


                <button
                    class="botao"
                    id="btnModal"
                    type="button"
                >
                    Ver informações
                </button>

            </div>

        </section>

    `;
}