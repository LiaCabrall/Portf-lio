import styles from './Habilidades.module.css';

export function Habilidades() {
    return (
        <section className={styles.text}>
            <h1>Habilidades</h1>
            <div className={styles.lista}>
                <ul>
                    <li>
                        Design de Interface
                    </li>
                    <li>
                        Design de experiência do usuário
                    </li>
                    <li>
                        Prototipagem
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
                        Design Responsivo
                    </li>
                </ul>

            </div>

        </section>

    )
}