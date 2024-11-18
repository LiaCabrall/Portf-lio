import styles from './Footer.module.css';

export function Footer() {
    return (
        <section className={styles.text}>
            <h1>Entre em contato</h1>
            <div className={styles.rows}>
                <div className={styles.container_row}>
                    <strong>Linkedin</strong>
                    <span><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lianacabral/">@lianacabral</a></span>
                </div>
                <div className={styles.container_row}>
                    <strong>E-mail</strong>
                    <span>lianav.cabral@gmail.com</span>
                </div>
                <div className={styles.container_row}>
                    <strong>Telefone</strong>
                    <span>(81) 98591-7226</span>
                </div>
            </div>

        </section>
    )
}