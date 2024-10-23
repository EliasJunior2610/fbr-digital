import Header from "../Header/header";
import imagem1 from "../../assets/MainScreen.png";
import imagem2 from "../../assets/MainScreen 2.png";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import "./MainScreen.css";

export default function MainScreen() {
  useEffect(() => {
    document.title = "FBR Digital";
  }, []);

  return (
    <>
      <Header />
      <div id="paginaPrincipal">
        <div id="conteudo">
          <div className="section" id="section1">
            <div className="image-container">
              <img
                src={imagem1}
                alt="Pessoa conectada"
                className="image-main"
                id="imagem1"
              />
              <div className="overlay-text">
                <p>Conecte-se aos</p>
                <p>melhores</p>
                <p>Provedores de</p>
                <p>internet da região!</p>
              </div>
            </div>
          </div>
          <div className="section" id="section2">
            <img
              src={imagem2}
              alt="Pessoa explicando"
              className="image-main"
              id="imagem2"
            />
            <div className="text-box">
              <h2 className="Titulo-secundario">Como Funciona?</h2>
              <p>
                Nossa plataforma tem como objetivo proporcionar praticidade,
                oferecendo serviços personalizados de acordo com a sua
                disponibilidade. A contratação dos serviços é realizada com base
                em sua agenda, permitindo que você selecione o dia, o horário e
                outros critérios relevantes, garantindo uma experiência
                eficiente e sob medida para suas necessidades.
              </p>
            </div>
          </div>
        </div>
        <h2 className="Titulo-secundario">Entre em contato com provedores:</h2>
      </div>
      <Footer />
    </>
  );
}
