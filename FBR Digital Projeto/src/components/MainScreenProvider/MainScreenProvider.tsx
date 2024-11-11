import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainScreenProvider.css";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

export default function MainProvider() {
  useEffect(() => {
    document.title = "FBR Digital";
  }, []);

  return (
    <>
      <Header />
      <div id="MainProvider">
        <div id="conteudo-mainProvedor">
          <div id="conteudo-itemMainProvedor">
            <h2>Novo Plano</h2>
            <hr id="decoration" />
            <p>
              Nesta opção, você pode criar um novo plano de serviço para
              oferecer aos seus clientes. Basta definir o nome do plano, a
              velocidade de conexão, a franquia de dados, o preço e as condições
              de contrato. Depois de configurar todos os detalhes, o plano
              ficará disponível para que os clientes possam contratá-lo
              diretamente.
            </p>
            <hr id="decoration" />
            <Link to="/novo-plano">
              <button>Criar Novo Plano</button>
            </Link>
          </div>

          <div id="conteudo-itemMainProvedor">
            <h2>Novo Serviço</h2>
            <hr id="decoration1" />
            <p>
              Aqui, você pode adicionar um novo serviço ao seu portfólio. Defina
              o tipo de serviço, suas funcionalidades, o preço e qualquer
              detalhe relevante para que os clientes saibam exatamente o que
              estão contratando. Após a criação, o serviço estará disponível
              para seus clientes na plataforma.
            </p>
            <hr id="decoration" />
            <Link to="/novo-servico">
              <button>Criar Novo Serviço</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
