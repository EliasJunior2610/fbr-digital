import { useEffect, useState } from "react";
import HeaderProvedor from "../HeaderProvedor/headerProvedor";
import "./Products.css";

interface Produto {
  plano: string;
  preco: number;
  descricao: string;
}

const servicosIniciais: Produto[] = [
  { plano: "80MB", preco: 70.0, descricao: "Plano de 80MB" },
  { plano: "100MB", preco: 99.0, descricao: "Plano de 100MB" },
  { plano: "200MB", preco: 120.0, descricao: "Plano de 200MB" },
  { plano: "Smart", preco: 150.0, descricao: "Plano Smart" },
  { plano: "TV", preco: 200.0, descricao: "Plano TV" },
];

export default function Products() {
  const [servicos, setServicos] = useState(servicosIniciais);

  useEffect(() => {
    document.title = "Meus Produtos";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "./assets/favicon.ico";
    document.head.appendChild(link);
  }, []);

  const excluirProduto = (plano: string) => {
    setServicos(servicos.filter((produto) => produto.plano !== plano));
  };

  return (
    <>
      <HeaderProvedor />
      <div className="produto-container">
        <h2>Meus Produtos</h2>
        <ul className="produto-lista">
          {servicos.map((produto) => (
            <li key={produto.plano} className="produto-item">
              <div>
                <strong>Plano:</strong> {produto.plano}
              </div>
              <div>
                <strong>Preço:</strong> {produto.preco}
              </div>
              <div>
                <strong>Descrição:</strong> {produto.descricao}
              </div>
              <button onClick={() => excluirProduto(produto.plano)}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
