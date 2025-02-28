import styles from './Habilidades.module.css';

export function Habilidades() {
    return (
        <section className={styles.text}>
            <h1>Habilidades</h1>
            <div className={styles.listas}>
                <div className={styles.lista}>
                    <h2>Hard Skills</h2>
                    <ul>
                        <li>
                            Design de Interface
                        </li>
                        <li>
                            Design de Experiência do Usuário
                        </li>
                        <li>
                            Design Responsivo
                        </li>
                        <li>
                            Criação de wireframes
                        </li>
                        <li>
                            Pesquisa com usuários
                        </li>
                        <li>
                            Testes de Usabilidade
                        </li>
                        <li>
                            Prototipagem
                        </li>
                    </ul>

                </div>

                <div className={styles.lista}>
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>
                            Resiliência
                        </li>
                        <li>
                            Agilidade
                        </li>
                        <li>
                            Pensamento Crítico
                        </li>
                        <li>
                            Flexibilidade
                        </li>
                        <li>
                            Criatividade
                        </li>
                        <li>
                            Tomada de Decisões
                        </li>
                        <li>
                            Comunicação e Escuta Ativa
                        </li>
                    </ul>

                </div>
            </div>
        </section>

    )
}