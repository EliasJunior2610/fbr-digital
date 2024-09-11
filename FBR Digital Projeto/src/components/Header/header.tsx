import "./Header.css";
import Logo from "../../assets/logo-fbr.png";

function Header() {
    return(
        <div id="Header">
           <a href="fbrdigital.com.br"><img src={Logo} alt="Logo FBR Digital" /></a> 
        </div>
    );
}

export default Header;