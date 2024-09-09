import '../css/Header.css';
import Logo from '../assets/logo-fbr.png'

function Header() {
    return(
        <div id="Header">
            <img src={Logo} alt="Logo FBR Digital" />
        </div>
    );
}

export default Header;