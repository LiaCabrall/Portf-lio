import './global.css';
import { Header } from './components/Header';
import { SobreMim } from './components/SobreMim';
import { Trabalhos } from './components/Trabalhos';

function App() {
  return (
    <div className="App">

      <section className="Header">
        <Header />
      </section>
      <section className="SobreMim">
        <SobreMim />
      </section>
      <section className="Trabalhos">
        <Trabalhos />
      </section>

    </div>
  );
}

export default App;
