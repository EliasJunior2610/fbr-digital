import Logo from "../../assets/logo-fbr.png";
import "./Rodape.css";

const Rodape: React.FC = () => {
  return (
    <div>
      <footer className="container">
        <div className="text">
          <p>R. Maria de Lourdes Casé Porto, 51</p>
          <p>Edif Times Business, salas 1701 a 1704</p>
          <p>Bairro Maurício de Nassau Caruaru - PE</p>
        </div>

        <div className="container-button">
          <div className="button-item1">
            <button>
              <a href="#">Solicitar Serviço</a>
            </button>
          </div>

          <div className="button-item2">
            <button>
              <a href="#">Download do Contrato Padrão</a>
            </button>
          </div>
        </div>

        <div className="text">
          <p>comercial@fbrdigital.com.br</p>
          <p>0800 081 4034 | (81) </p>
        </div>

        <figure>
          <img src={Logo} alt="Logo FBR" />
        </figure>

      </footer>
    </div>
  );
};

export default Rodape;
