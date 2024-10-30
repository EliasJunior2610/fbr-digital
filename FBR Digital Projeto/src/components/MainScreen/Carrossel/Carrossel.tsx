import React, { useState } from "react";
import "./Carrossel.css";

const Carrosel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      nome: "Serviço 1",
      descricao: "Descrição do Serviço 1",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Serviço 2",
      descricao: "Descrição do Serviço 2",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Serviço 3",
      descricao: "Descrição do Serviço 3",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Serviço 4",
      descricao: "Descrição do Serviço 4",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Serviço 5",
      descricao: "Descrição do Serviço 5",
      imagem: "https://via.placeholder.com/50",
    },
    {
      nome: "Serviço 6",
      descricao: "Descrição do Serviço 6",
      imagem: "https://via.placeholder.com/50",
    },
  ];

  const itemsPerPage = 3;

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
        {visibleItems.map((item, index) => (
          <div key={index} className="carrosel-item">
            <img src={item.imagem} alt={item.nome} className="carrosel-image" />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <button className="contratar-button">Contratar</button>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carrosel-button">
        {">"}
      </button>
    </div>
  );
};

export default Carrosel;
