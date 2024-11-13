import "./HistoricClient.css";
import MenuAppBar from "../HeaderCliente/headerCliente";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

interface Servico {
  id: number;
  nome: string;
  data: string;
  status: string;
}

const servicos: Servico[] = [
  { id: 1, nome: "Revisão Completa", data: "2024-01-15", status: "Concluído" },
  { id: 2, nome: "Instalação", data: "2024-02-20", status: "Em Andamento" },
  { id: 3, nome: "Manutenção", data: "2024-03-10", status: "Concluido" },
  { id: 4, nome: "Manutenção", data: "2024-03-10", status: "Concluido" },
  { id: 5, nome: "Instalação", data: "2024-03-10", status: "Agendado" },
  { id: 6, nome: "Instalação", data: "2024-03-10", status: "Agendado" },
];

export default function HistoricClient() {
  useEffect(() => {
    document.title = "Histórico";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "./assets/favicon.ico";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <MenuAppBar />
      <div className="historico-container">
        <h2>Histórico de Serviços</h2>
        <ul className="historico-lista">
          {servicos.map((servico) => (
            <li key={servico.id} className="historico-item">
              <div>
                <strong>Serviço:</strong> {servico.nome}
              </div>
              <div>
                <strong>Data:</strong> {servico.data}
              </div>
              <div>
                <strong>Status:</strong> {servico.status}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
