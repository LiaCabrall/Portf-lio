import styles from './Header.module.css';
import foto1 from '../assets/foto1.png';

export function Header() {
    return (
        <section className={styles.header}>
            <div className={styles.img}>
                <img src={foto1} alt='foto principal' />
            </div>
            <div className={styles.text}>
                <h1>
                    Liana Cabral
                </h1>
                <div className={styles.content_text}>
                    <strong>PORTFÓLIO</strong>
                    <span>UX UI Designer</span>
                </div>
            </div>
        </section>

    );
}