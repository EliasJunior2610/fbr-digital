import { useEffect } from "react";
import "./ClientListFBR.css";
import HeaderFBR from "../HeaderFBR/headerFBR";
import Footer from "../Footer/Footer";

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

export default function ClientListFBR() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <HeaderFBR />
      <div className="Clientes-container">
        <h2>Lista Clientes</h2>
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
