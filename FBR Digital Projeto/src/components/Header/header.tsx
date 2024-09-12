import "./Header.css";
import Logo from "../../assets/Marca FBR.png";

function Header() {
    return(
        <div id="Header">
            <a href="fbrdigital.com.br"><img src={Logo} alt="Logo FBR Digital" /></a>
            <div id="Links">
                <a href="../Registro/Registro.tsx"><p>Cadastro</p></a>
                <a href="../Login/Login.tsx"><p>Login</p></a>
            </div>
        </div>
    );
}

export default Header;