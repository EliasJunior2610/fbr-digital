import "./Header.css";
import Logo from "../../assets/Marca FBR.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="Header">
      <a href="fbrdigital.com.br">
        <img src={Logo} alt="Logo FBR Digital" />
      </a>
      <div id="Links">
        <Link to="/registro">
          <p>Cadastro</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
