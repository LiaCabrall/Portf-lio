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
                    Liana Ca<span className={styles.color}>bral</span>
                </h1>
                <div className={styles.content_text}>
                    <strong>PORTFÓ<span className={styles.color}>LIO</span></strong>
                    <span>UX UI Designer</span>
                </div>
            </div>
        </section>

    );
}