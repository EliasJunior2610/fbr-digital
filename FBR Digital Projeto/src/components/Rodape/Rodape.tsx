import Logo from "../../assets/Marca FBR.png";
import "./Rodape.css";

function Rodape(){
  return (
    <div id="baseboard">
        <div id="textos">
           <div id="text1">
            <p>R. Maria de Lourdes Casé Porto, 51</p>
            <p>Edif Times Business, salas 1701 a 1704</p>
            <p>Bairro Maurício de Nassau Caruaru - PE</p>
          </div>
          
          <div id="text2">
            <p>comercial@fbrdigital.com.br</p>
            <p>0800 081 4034 | (81) </p>
          </div>
        </div>

        <div id="container-button">
          <div id="button-item1">
            <button id="button1">
              Solicitar Serviço
            </button>
          </div>

          <div id="button-item2">
            <button id="button2">
              Download do Contrato Padrão
            </button>
          </div>
        </div>


        <figure>
          <img src={Logo} alt="Logo FBR" />
        </figure>
    </div>
  );
};

export default Rodape;
