import { useEffect, useState } from "react";
import "./Register.css";
import RegisterClient from "./RegisterClient/RegisterClient";
import RegisterProvider from "./RegisterProvider/RegisterProvider";

export default function Register() {
  useEffect(() => {
    document.title = "Registro";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "./assets/favicon.ico";
    document.head.appendChild(link);
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
