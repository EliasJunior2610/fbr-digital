import "./Header.css";
import Logo from "../../assets/Marca FBR.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Registro from "../Registro/Registro";
import Login from "../Login/Login";

function Header() {
    return(
        <Router>
            <div id="Header">
                <a href="fbrdigital.com.br"><img src={Logo} alt="Logo FBR Digital" /></a>
                <div id="Links">
                    <Link to="/registro"><p>Cadastro</p></Link>
                    <Link to="/login"><p>Login</p></Link>
                </div>
            </div>
            <Routes>
                <Route path="/registro" element={<Registro />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}

export default Header;