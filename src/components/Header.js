import { Link } from "react-router-dom";
import "./style.css";
function Header() {
    const links = document.getElementsByClassName("links");
    function menuClick(event){
        if(links[0].classList.contains("hidden")){
            links[0].classList.add("active")
            links[0].classList.remove("hidden")
        } else{
            links[0].classList.remove("active")
            links[0].classList.add("hidden")
        }
        
    }
  return (
    <>
      <header>
        <p className="title">Charadas & Enigmas</p>
        <nav>
          <div className="menu">
            <p  onClick={menuClick}>M</p>
            <div className="links hidden" id="linkaaaas">
              <Link className="linkMenu" to="/928_module01/front/">
                Instruções
              </Link>
              <Link className="linkMenu" to="/928_module01/front/dificuldades/">
                Escolha seu enigma
              </Link>
              <Link className="linkMenu" to="/928_module01/front/enigmas/">
                Veja todos os enigmas
              </Link>
            </div>
          </div>
          <ul>
            <li>
              <Link className="link" to="/928_module01/front/">
                Instruções
              </Link>
            </li>
            <li>
              <Link className="link" to="/928_module01/front/dificuldades/">
                Escolha seu enigma
              </Link>
            </li>
            <li>
              <Link className="link" to="/928_module01/front/enigmas/">
                Veja todos os enigmas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
