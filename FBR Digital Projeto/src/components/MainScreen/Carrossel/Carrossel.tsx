import React, { useState } from "react";
import "./Carrossel.css";
import { Link } from "react-router-dom";

const Carrosel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      nome: "Provedor 1",
      descricao: "Descrição do Provedor 1",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Provedor 2",
      descricao: "Descrição do Provedor 2",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Provedor 3",
      descricao: "Descrição do Provedor 3",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Provedor 4",
      descricao: "Descrição do Provedor 4",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Provedor 5",
      descricao: "Descrição do Provedor 5",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Provedor 6",
      descricao: "Descrição do Provedor 6",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Provedor 7",
      descricao: "Descrição do Provedor 7",
      imagem: "https://via.placeholder.com/50",
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
