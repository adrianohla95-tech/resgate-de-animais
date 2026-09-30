// ======================================================
// VIEW - PROJETOS
// ======================================================

export function renderProjetos() {

    return `

        <section>

            <h2>
                Nossos Projetos
            </h2>


            <p>
                Conheça as principais ações da ONG.
            </p>


            <div class="container">

                <article class="card">

                    <span class="badge">
                        Projeto ativo
                    </span>


                    <h3>
                        Resgate de Animais
                    </h3>


                    <p>
                        Ações de resgate e proteção para
                        animais em situação de abandono
                        ou risco.
                    </p>


                    <button
                        class="botao btn-projeto"
                        data-titulo="Resgate de Animais"
                        type="button"
                    >
                        Ver informações
                    </button>

                </article>


                <article class="card">

                    <span class="badge">
                        Voluntários
                    </span>


                    <h3>
                        Voluntariado
                    </h3>


                    <p>
                        Pessoas interessadas podem
                        participar das ações e ajudar
                        nos cuidados dos animais.
                    </p>


                    <button
                        class="botao btn-projeto"
                        data-titulo="Voluntariado"
                        type="button"
                    >
                        Ver informações
                    </button>

                </article>


                <article class="card">

                    <span class="badge">
                        Ajude
                    </span>


                    <h3>
                        Doação
                    </h3>


                    <p>
                        As doações ajudam com alimentação,
                        cuidados veterinários e atendimento
                        dos animais resgatados.
                    </p>


                    <button
                        class="botao btn-projeto"
                        data-titulo="Doação"
                        type="button"
                    >
                        Ver informações
                    </button>

                </article>

            </div>

        </section>

    `;
}