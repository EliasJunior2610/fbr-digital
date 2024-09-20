import "./Header.css";
import Logo from "../../assets/Marca FBR.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="Header">
      <Link to="/">
        <img src={Logo} alt="Logo FBR Digital" />
      </Link>
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
