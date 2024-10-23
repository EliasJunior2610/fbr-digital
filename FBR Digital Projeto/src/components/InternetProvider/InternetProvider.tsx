import { useEffect, useState } from "react";
import './InternetProvider.css';
import InternetPlans from "./InternetPlans/InternetPlans";
import InternetServices from "./InternetServices/InternetServices";

export default function InternetProvider() {
    useEffect(() => {
        document.title = 'Planos'
    }, [])

    const [etapa, setEtapa] = useState(1)

    const nextStep = () => setEtapa(2)
    const prevStep = () => setEtapa(1)
    return (
        <div id="InternetProvider">
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

            <br /> <br />

          </div>
          <div id="conteudo">
            {etapa === 1 && <InternetPlans />}
            {etapa === 2 && <InternetServices />}
          </div>

        </div>
    );
}
