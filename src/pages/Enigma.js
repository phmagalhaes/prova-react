import "../css/enigma.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/enigmas1.json";
import { Link } from "react-router-dom";

function Enigma() {
  const enigmas = data.enigmas;

  const params = new URLSearchParams(window.location.search);
  const enigmaId = params.get("enigma");


  return (
    <div className="enigmaPage">
      <Header />
      <main>
        <section className="enigma">
            <p className="title">{enigmas[enigmaId].titulo}</p>
            <p className="contexto">{enigmas[enigmaId].contexto}</p>
            <div className="dados">
                <div className="solucao">
                    <div className="face front">
                        <p>{enigmas[enigmaId].solucao}</p>
                    </div>
                    <div className="face back">
                        <p>Solução</p>
                        <p className="subtitle">Clique e segure para revelar</p>
                    </div>
                </div>
                <div className="img">
                    <p>Imagem do Enigma</p>
                </div>
            </div>
        </section>
        <section className="links">
            <Link className="link" to={"/928_module01/front/"}>Início</Link>
            <Link className="link" to={"/928_module01/front/dificuldades/"}>Seleção de Enigmas</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Enigma;
