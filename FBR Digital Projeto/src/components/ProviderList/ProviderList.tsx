import { useEffect } from "react";
import "./ProviderList.css";
import HeaderFBR from "../HeaderFBR/headerFBR";
import Footer from "../Footer/Footer";

interface Provedores {
  nome: string;
  telefone: string;
}

const Provedores: Provedores[] = [
  { nome: "LocNacionais", telefone: "(81) 993525747" },
  { nome: "Brisa Net", telefone: "(81) 935356524" },
  { nome: "Net.com", telefone: "(81) 954538273" },
  { nome: "Gravatá Net", telefone: "(81) 923656353" },
  { nome: "TI Conecte", telefone: "(81) 947476853" },
  { nome: "JA Net", telefone: "(81) 946572349" },
];

export default function ProviderList() {
  useEffect(() => {
    document.title = "Provedores";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "./assets/favicon.ico";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <HeaderFBR />
      <div className="Providers-container">
        <h2>Lista de Provedores</h2>
        <ul className="Providers-list">
          {Provedores.map((Provedores) => (
            <li key={Provedores.nome} className="Providers-item">
              <div>
                <strong>Nome do Provedor:</strong> {Provedores.nome}
              </div>
              <div>
                <strong>Telefone:</strong> {Provedores.telefone}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
