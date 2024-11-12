import { useState, useEffect } from "react";
import ReportRequest from "./ReportRequest/ReportRequest";
import './Report.css';
import filter from '../../assets/filter-icon.svg';

export default function Report() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        document.title = 'Relatórios';
    }, []);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div id="Report">
            <h1>Relatórios</h1>
            
            <div id="filtro">
                <div id="classificacao">
                    <img 
                        src={filter} 
                        alt="Filtro do Relatório" 
                        onClick={togglePopup} 
                        style={{ cursor: 'pointer' }} 
                    />
                    <h3 style={{color: 'white'}}>Relatório Geral</h3>
                </div>
                <form id="data">
                    <input type="date" name="data" id="data" />
                    <input type="submit" value="Cancelar" />
                    <input type="submit" value="Filtrar" />
                </form>
            </div>

            {showPopup && (
                <div className="popup">
                    <h4>Filtrar Por:</h4>
                    <div>
                        <input type="checkbox" id="realizados" name="realizados" />
                        <label htmlFor="realizados">Realizados</label>
                    </div>
                    <div>
                        <input type="checkbox" id="pendentes" name="pendentes" />
                        <label htmlFor="pendentes">Pendentes</label>
                    </div>
                    <div>
                        <input type="checkbox" id="recusados" name="recusados" />
                        <label htmlFor="recusados">Recusados</label>
                    </div>
                    <button onClick={togglePopup}>Concluir</button>
                </div>
            )}

            <div className="linha">
                <ReportRequest title="Solicitação Confirmada" provider="GravataNet" client="João Vitor" date="08/09/2024" corTitulo="#34A752" />
                <ReportRequest title="Solicitação Confirmada" provider="GravataNet" client="Lucas Oliveira" date="07/07/2024" corTitulo="#34A752" />
                <ReportRequest title="Solicitação Recusada" provider="Nego Net" client="Juarez José" date="15/09/2024" corTitulo="#F26651" />
            </div>

            <div className="linha">
                <ReportRequest title="Solicitação Pendente" provider="Brisanet" client="Luan Santos" date="04/06/2024" corTitulo="#EABE2E" />
                <ReportRequest title="Solicitação Confirmada" provider="Brisanet" client="Elias Sales" date="08/09/2024" corTitulo="#34A752" />
                <ReportRequest title="Solicitação Confirmada" provider="Brisanet" client="Breno Lopes" date="05/05/2024" corTitulo="#34A752" />
            </div>
        </div>
    );
}
