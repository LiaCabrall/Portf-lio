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
                            Design de experiência do usuário
                        </li>
                        <li>
                        Design Responsivo
                        </li>
                        <li>
                            Criação de Wireframes
                        </li>
                        <li>
                            Pesquisa com Usuários
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
                            Pensamento crítico
                        </li>
                        <li>
                            Flexibilidade
                        </li>
                        <li>
                            Criatividade
                        </li>
                        <li>
                            Tomada de decisões
                        </li>
                        <li>
                            Comunicação e escuta ativa
                        </li>
                    </ul>

                </div>
            </div>
        </section>

    )
}