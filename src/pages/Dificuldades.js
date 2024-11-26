import "../css/dificuldades.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/enigmas1.json";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dificuldades() {
  let [dificuldade, setDificuldade] = useState(null);

  const enigmas = data.enigmas;

  function showDificuldade1() {
    setDificuldade(1);
  }

  function showDificuldade2() {
    setDificuldade(2);
  }

  function showDificuldade3() {
    setDificuldade(3);
  }

  return (
    <div className="dificuldadesPage">
      <Header />
      <main>
        <section className="buttons">
          <button onClick={showDificuldade1}>Dificuldade 1</button>
          <button onClick={showDificuldade2}>Dificuldade 2</button>
          <button onClick={showDificuldade3}>Dificuldade 3</button>
        </section>
        {dificuldade === 1 ? (
          <section className="enigmas">
            <div className="enigma">
              <p className="title">{enigmas[0].titulo}</p>
              <p className="resumo">{enigmas[0].contexto.slice(0, 30)}...</p>
              <Link className="link" to={"/928_module01/front/enigmas/show/?enigma=" + 0}>
                Ver enigma completo
              </Link>
            </div>
            <div className="enigma">
              <p className="title">{enigmas[4].titulo}</p>
              <p className="resumo">{enigmas[4].contexto.slice(0, 30)}...</p>
              <Link className="link" to={"/928_module01/front/enigmas/show/?enigma=" + 4}>
                Ver enigma completo
              </Link>
            </div>
          </section>
        ) : dificuldade === 2 ? (
          <section className="enigmas">
            <div className="enigma">
              <p className="title">{enigmas[2].titulo}</p>
              <p className="resumo">{enigmas[2].contexto.slice(0, 30)}...</p>
              <Link className="link" to={"/928_module01/front/enigmas/show/?enigma=" + 2}>
                Ver enigma completo
              </Link>
            </div>
          </section>
        ) : dificuldade === 3 ? (
          <section className="enigmas">
            <div className="enigma">
              <p className="title">{enigmas[1].titulo}</p>
              <p className="resumo">{enigmas[1].contexto.slice(0, 30)}...</p>
              <Link className="link" to={"/928_module01/front/enigmas/show/?enigma=" + 1}>
                Ver enigma completo
              </Link>
            </div>
            <div className="enigma">
              <p className="title">{enigmas[3].titulo}</p>
              <p className="resumo">{enigmas[3].contexto.slice(0, 30)}...</p>
              <Link className="link" to={"/928_module01/front/enigmas/show/?enigma=" + 3}>
                Ver enigma completo
              </Link>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default Dificuldades;
