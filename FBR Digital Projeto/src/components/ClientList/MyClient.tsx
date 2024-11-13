import "./MyClient.css";
import HeaderProvedor from "../HeaderProvedor/headerProvedor";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

interface Clientes {
  nome: string;
  telefone: string;
}

const Clientes: Clientes[] = [
  { nome: "João Vitor", telefone: "(81) 993545747" },
  { nome: "Marcos Vinicius", telefone: "(81) 935353624" },
  { nome: "Pedro Guilherme", telefone: "(81) 953438273" },
  { nome: "Dalton Eduardo", telefone: "(81) 923146353" },
  { nome: "Jose Custódio", telefone: "(81) 947445853" },
  { nome: "Gleisely Kamilly", telefone: "(81) 946572839" },
];

export default function MyClient() {
  useEffect(() => {
    document.title = "Meus Clientes";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "./assets/favicon.ico";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <HeaderProvedor />
      <div className="Clientes-container">
        <h2>Meus Clientes</h2>
        <ul className="Clientes-lista">
          {Clientes.map((Clientes) => (
            <li key={Clientes.nome} className="Clientes-item">
              <div>
                <strong>Nome:</strong> {Clientes.nome}
              </div>
              <div>
                <strong>Telefone:</strong> {Clientes.telefone}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
