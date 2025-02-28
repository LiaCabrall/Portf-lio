import styles from './SobreMim.module.css'
import foto2 from '../assets/foto2.png';

export function SobreMim() {
    return (
        <section className={styles.content_sobremim}>
            <div className={styles.text}>
                <h1>Sobre mim</h1>
                    <p>Sou estudante de Sistemas para Internet,
                        com grande interesse na área de Design.
                        Nos últimos 12 meses, tenho me dedicado a
                        aprimorar minhas habilidades, tanto no
                        trabalho quanto nos estudos. Minhas
                        especialidades incluem o uso do <span className={styles.negrito}>Figma</span> e a
                        criação de <span className={styles.negrito}>Design Systems</span>.</p>
                    <a rel="noopener noreferrer" target="_blank" href='https://drive.google.com/file/d/1vfECvYRWairNhB5bHiK9snnoqPwn3MSE/view?usp=sharing'>Meu currículo</a>
            </div>
            <div className={styles.img}>
                <img src={foto2} alt='foto de Liana' />
            </div>
        </section>

    )
}