import { useEffect } from "react"
import ReportRequest from "./ReportRequest/ReportRequest"
import './Report.css'
import filter from '../../assets/filter-icon.svg'

export default function Report() {
    useEffect(() => {
        document.title = 'Relatórios'
    }, [])
    return (
        <div id="Report">
            <h1>Relatórios</h1>
            
            <div id="filtro">
                <div id="classificacao">
                    <img src={filter} alt="Filtro do Relatório" />
                    <h3 style={{color: 'white'}}>Relatório Geral</h3>

                </div>
                <form id="data">
                    <input type="date" name="data" id="data" />
                    <input type="submit" value="Filtrar" />
                </form>
            </div>

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
    )
}