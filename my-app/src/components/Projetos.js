import styles from './Projetos.module.css';
import foto3 from '../assets/foto3.png'
import foto4 from '../assets/foto4.png'
import foto5 from '../assets/foto5.png'

export function Projetos() {
    return (
        <section className={styles.text}>
            <h1>Meus projetos</h1>

            <div className={styles.projects}>
                <div className={styles.container_project}>
                    <img src={foto3} alt='tutumite'></img>
                    <div className={styles.container_text}>
                        <strong><a rel="noopener noreferrer" target="_blank" href='https://www.figma.com/proto/rjxXnpgqYRaZZMnFvdNfA1/Tutumite?node-id=1-2&node-type=canvas&t=sCGKe28LXlQFZtUP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2'>Tutumite</a></strong>
                        <span>Site de uma empresa de
                            viagens.</span>
                    </div>
                </div>

                <div className={styles.container_project}>
                    <img src={foto4} alt='reconect'></img>
                    <div className={styles.container_text}>
                        <strong><a rel="noopener noreferrer" target="_blank" href='https://www.figma.com/design/TjzWKqvnT0OnZV5sG2i8FC/Wireframe-Projeto-Resid%C3%AAncia?node-id=0-1&t=LeJ4gvxcHsU5iUJf-1'>REConect</a></strong>
                        <span>Aplicativo com o intuito de
                            melhorar o turismo em
                            Recife.</span>
                    </div>
                </div>

                <div className={styles.container_project}>
                    <img src={foto5} alt='vinhancazen'></img>
                    <div className={styles.container_text}>
                        <strong><a rel="noopener noreferrer" target="_blank" href='https://www.figma.com/proto/GhrkTYX2KN48jkQQfsRhjo/Vizinhan%C3%A7aZen?node-id=9-315&node-type=frame&t=BLNUJiHbT5IgdgdF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A315'>VizinhançaZen</a></strong>
                        <span>Aplicativo com o intuito de
                            melhorar a conexão de uma
                            ONG com seus usuários.</span>
                    </div>
                </div>
            </div>

        </section >
    )
}