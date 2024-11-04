import React, { useState } from "react";
import "./Carrossel.css";
import { Link } from "react-router-dom";
import imagem1 from "./Carrosel-assets/empresa 1.png";
import imagem2 from "./Carrosel-assets/empresa 2.png";
import imagem3 from "./Carrosel-assets/empresa 3.png";
import imagem4 from "./Carrosel-assets/empresa 4.png";
import imagem5 from "./Carrosel-assets/empresa 5.png";
import imagem6 from "./Carrosel-assets/empresa 6.png";
import imagem7 from "./Carrosel-assets/empresa 7.png";

const Carrosel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      nome: "Provedor 1",
      descricao: "Descrição do Provedor 1",
      imagem: imagem1,
    },
    {
      nome: "Provedor 2",
      descricao: "Descrição do Provedor 2",
      imagem: imagem2,
    },
    {
      nome: "Provedor 3",
      descricao: "Descrição do Provedor 3",
      imagem: imagem3,
    },
    {
      nome: "Provedor 4",
      descricao: "Descrição do Provedor 4",
      imagem: imagem4,
    },
    {
      nome: "Provedor 5",
      descricao: "Descrição do Provedor 5",
      imagem: imagem5,
    },
    {
      nome: "Provedor 6",
      descricao: "Descrição do Provedor 6",
      imagem: imagem6,
    },
    {
      nome: "Provedor 7",
      descricao: "Descrição do Provedor 7",
      imagem: imagem7,
    },
  ];

  const itemsPerPage = 6;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < items.length ? prevIndex + itemsPerPage : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0
        ? prevIndex - itemsPerPage
        : items.length - itemsPerPage
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="carrosel">
      <button onClick={prevSlide} className="carrosel-button">
        {"<"}
      </button>
      <div className="carrosel-content">
        <div className="carrosel-row">
          {visibleItems.slice(0, itemsPerPage / 2).map((item, index) => (
            <div key={index} className="carrosel-item">
              <img
                src={item.imagem}
                alt={item.nome}
                className="carrosel-image"
              />
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <Link to="/internet-provedor">
                <button className="contratar-button">Contratar</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="carrosel-row">
          {visibleItems
            .slice(itemsPerPage / 2, itemsPerPage)
            .map((item, index) => (
              <div key={index} className="carrosel-item">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="carrosel-image"
                />
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                <Link to="/internet-provedor">
                  <button className="contratar-button">Contratar</button>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <button onClick={nextSlide} className="carrosel-button">
        {">"}
      </button>
    </div>
  );
};

export default Carrosel;
