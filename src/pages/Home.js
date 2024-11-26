import "../css/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="homePage">
      <Header />

      <main>
        <section className="instrucoes">
          <p className="title">Bem vindo ao Enigmas do Mistério</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem culpa
            ex assumenda. Dolorem, consequatur vel. Molestias et adipisci
            dolorum quod eligendi, quis nobis facere, aspernatur libero
            voluptates aliquam voluptatibus nostrum?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem culpa
            ex assumenda. Dolorem, consequatur vel. Molestias et adipisci
            dolorum quod eligendi, quis nobis facere, aspernatur libero
            voluptates aliquam voluptatibus nostrum?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Rem culpa ex assumenda. Dolorem,
            consequatur vel. Molestias et adipisci dolorum quod eligendi, quis
            nobis facere, aspernatur libero voluptates aliquam voluptatibus
            nostrum?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Rem culpa ex assumenda. Dolorem, consequatur vel. Molestias et
            adipisci dolorum quod eligendi, quis nobis facere, aspernatur libero
            voluptates aliquam voluptatibus nostrum?
          </p>
          <p>Selecione um nível de dificuldade ou veja a lista completa.</p>
        </section>
        <section className="cards">
            <div className="card" id="card1">
                <p className="title">1º passo:</p>
                <p>Escolha o desafio, clique no item escolhido e revele o enigma aos interessados em participar</p>
            </div>
            <div className="card" id="card2">
                <p className="title">1º passo:</p>
                <p>Escolha o desafio, clique no item escolhido e revele o enigma aos interessados em participar</p>
            </div>
            <div className="card" id="card3">
                <p className="title">1º passo:</p>
                <p>Escolha o desafio, clique no item escolhido e revele o enigma aos interessados em participar</p>
            </div>
            <div className="card" id="card4">
                <p className="title">1º passo:</p>
                <p>Escolha o desafio, clique no item escolhido e revele o enigma aos interessados em participar</p>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
