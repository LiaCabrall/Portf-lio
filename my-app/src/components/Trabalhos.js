import styles from './Trabalhos.module.css'

export function Trabalhos() {
    return (
        <section className={styles.text}>
            <h1>Experiência de Trabalho</h1>
            <div className={styles.container_text}>
                <strong>Curtacode</strong>
                <span>Estágio - 2024 / atualmente</span>
                <span>Atuando em UX UI Designer</span>
            </div>
            <div className={styles.container_text}>
                <strong>Firebox Software</strong>
                <span>Estágio - 2023/2024</span>
                <span>Atuando em Monitoramento de Sistemas</span>
            </div>
            <div className={styles.container_text}>
                <strong>Fedex</strong>
                <span>Jovem Aprendiz - 2022/2023</span>
                <span>Atuando em Auxiliar de escritório
                    em geral</span>
            </div>

        </section>
    )
}