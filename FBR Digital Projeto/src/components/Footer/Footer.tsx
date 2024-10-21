import { Link } from "react-router-dom";
import Logo from "../../assets/Marca FBR.png";
import "./Footer.css";

function Rodape(){
  return (
    <div id="baseboard">
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
          
        </div>
    </div>
  );
};

export default Rodape;
