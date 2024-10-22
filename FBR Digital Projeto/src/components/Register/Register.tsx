import { useEffect, useState } from "react";
import Header from "../Header/header";
import RegisterClient from "../RegisterClient/RegisterClient";
import RegisterProvider from "../RegisterProvider/RegisterProvider";
import "./Register.css";

export default function Register() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const [etapa, setEtapa] = useState(1);

  const nextStep = () => setEtapa(2);
  const prevStep = () => setEtapa(1);

  return (
    <>
      <div id="pagina">
        <Header />
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
          <div id="conteudo">
            {etapa === 1 && <RegisterClient />}
            {etapa === 2 && <RegisterProvider />}
          </div>
        </div>
      </div>
    </>
  );
}
