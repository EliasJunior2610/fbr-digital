import { Link } from "react-router-dom";
import Logo from "../../assets/Marca FBR.png";
import "./Footer.css";
import instagramLogo from '../../assets/instagram-logo.svg'
import facebookLogo from '../../assets/facebook-logo.svg'
import linkedinLogo from '../../assets/linkedin-logo.svg'

function Rodape() {
  return (
    <div id="baseboard">
<<<<<<< HEAD
        <div id="ladoEsquerdo">
          <h2>Endereço</h2>
          <p>R. Maria de Lourdes Casé Porto, 51 <br /> Edif Times Business, salas 1701 a  1704 <br /> Bairro Maurício de Nassau, Caruaru - PE</p>
        </div>
        <div className="linha"></div>
        <div id="ladoMeio">
          <h2>Serviço</h2>
          <p>Solicite orçamento</p>
          <p>Download do contrato padrão</p>
          <Link to='/'><img src={Logo} alt="Logo da FBR" /></Link>
        </div>
        <div className="linha"></div>
        <div id="ladoDireito">
          <h2>Contato</h2>
          <p>comercial@fbrdigital.com.br</p>
          <p>0800 081 4034 | (81) 4040-4034</p>
          
          <a href="https://www.instagram.com/fbrdigital" target="_blank" rel="noopener noreferrer">          
            <img src={instagramLogo} alt="Logo do Instagram" />
          </a>

          <a href="https://www.facebook.com/conexaofbrdigital" target="_blank" rel="noopener noreferrer">          
            <img src={facebookLogo} alt="Logo do Facebook" />
          </a>
          
          <a href="https://il.linkedin.com/company/fbr-digital" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="Logo do Linkedin" />
          </a>
        </div>
=======
      <div id="ladoEsquerdo">
        <h2>Endereço</h2>
        <p>
          R. Maria de Lourdes Casé Porto, 51 <br /> Edif Times Business, salas
          1701 a 1704 <br /> Bairro Maurício de Nassau, Caruaru - PE
        </p>
      </div>
      <div className="linha"></div>
      <div id="ladoMeio">
        <h2>Serviço</h2>
        <p>Solicite orçamento</p>
        <p>Download do contrato padrão</p>
        <Link to="/">
          <img src={Logo} alt="Logo da FBR" />
        </Link>
      </div>
      <div className="linha"></div>
      <div id="ladoDireito">
        <h2>Contato</h2>
        <p>comercial@fbrdigital.com.br</p>
        <p>0800 081 4034 | (81) 4040-4034</p>
      </div>
>>>>>>> 0aea0b763ecc1356be8b667ef167daa3a64e0f48
    </div>
  );
}

export default Rodape;
