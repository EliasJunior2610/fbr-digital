import "./Header.css";
import Logo from "../../assets/Marca FBR.png";

function Header() {
  return (
    <div id="Header">
      <a href="fbrdigital.com.br">
        <img src={Logo} alt="Logo FBR Digital" />
      </a>
      <div id="Links">
        <a href="/registro">
          <p>Cadastro</p>
        </a>
        <a href="/login">
          <p>Login</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
