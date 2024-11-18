import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { SobreMim } from './components/SobreMim';
import { Trabalhos } from './components/Trabalhos';
import { Projetos } from './components/Projetos';
import { Habilidades } from './components/Habilidades';
import { Footer } from './components/Footer';
import { Game } from './components/Game';

function App() {
  return (
    <div className={styles.wrapper}>

      <header className="Header">
        <Header />
      </header>
      <section className="SobreMim">
        <SobreMim />
      </section>
      <section className="Trabalhos">
        <Trabalhos />
      </section>
      <section className="Projetos">
        <Projetos />
      </section>
      <section className="Habilidades">
        <Habilidades />
      </section>
      <section className="Game">
        <Game />
      </section>
      <footer className="Footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
