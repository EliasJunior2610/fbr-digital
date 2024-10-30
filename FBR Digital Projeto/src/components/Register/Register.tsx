<<<<<<< HEAD
import { useEffect, useState } from "react";
import RegisterClient from "./RegisterClient/RegisterClient";
import RegisterProvider from "./RegisterProvider/RegisterProvider";
import "./Register.css";
=======
import React, { useState } from 'react';
import './Register.css'; 
import Header from '../Header/headerCliente';
>>>>>>> 9d23af9675514975d09613c0b304d56299406d64

export default function Register() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const [etapa, setEtapa] = useState(1);

  const nextStep = () => setEtapa(2);
  const prevStep = () => setEtapa(1);

  return (
    <>
      <div id="paginaRegistro">
        <div id="registro">
          <div id="buttons">
            <button
              onClick={prevStep}
              className={etapa === 1 ? "ativo" : "inativo"}
            >
              Cliente
            </button>
            <button
              onClick={nextStep}
              className={etapa === 2 ? "ativo" : "inativo"}
            >
              Provedor
            </button>
          </div>
          <div id="conteudoRegistro">
            {etapa === 1 && <RegisterClient />}
            {etapa === 2 && <RegisterProvider />}
          </div>
        </div>
      </div>
    </>
  );
}
