import { useEffect } from "react";
import "./MainScreenFBR.css";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import { Link } from "react-router-dom";

export default function MainScreenFBR() {
  useEffect(() => {
    document.title = "FBR Digital";
  }, []);

  return (
    <>
      <Header />
      <div id="MainScreenFBR">
        <div id="conteudoFBR">
          <div id="conteudoFBR-item">
            <h2>Relatório</h2>
            <hr />
            <p>
              Você pode visualizar e gerar relatórios detalhados sobre o
              desempenho dos provedores e a satisfação dos clientes. Escolha o
              período desejado para obter insights e dados completos que
              ajudarão na análise de resultados e na tomada de decisões.
            </p>
            <hr />
            <Link to="/relatorio" id="buttonFBR">
              <button>Ver Relatórios</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
