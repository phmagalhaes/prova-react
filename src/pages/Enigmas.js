import "../css/enigmas.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/enigmas1.json";

function Enigmas() {
  const enigmas = data.enigmas;
  return (
    <div className="enigmasPage">
      <Header />
      <main>
        <section className="enigmas">
          <table>
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Resumo</th>
                <th scope="col">Nível de dificuldade</th>
              </tr>
            </thead>
            <tbody>
              {enigmas.map((enigma) => (
                <tr key={enigma.link}>
                  <td>{enigma.titulo}</td>
                  <td >{enigma.contexto.slice(0, 30)}...</td>
                  <td>{enigma.dificuldade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Enigmas;
