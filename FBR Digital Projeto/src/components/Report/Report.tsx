import { useEffect } from "react"
import ReportRequest from "../ReportRequest/ReportRequest"
import './Report.css'

export default function Report() {
    useEffect(() => {
        document.title = 'Relatórios'
    }, [])
    return (
        <div id="Report">
            <div className="linha">
                <ReportRequest title="Solicitação Confirmada" provider="GravataNet" client="João Vitor" date="08/09/2024" corTitulo="#34A752" />

                <ReportRequest title="Solicitação Confirmada" provider="GravataNet" client="Lucas Oliveira" date="07/07/2024" corTitulo="#34A752" />

                <ReportRequest title="Solicitação Recusada" provider="Nego Net" client="Juarez José" date="15/09/2024" corTitulo="#FF0110" />
            </div>

            <div className="linha">
                <ReportRequest title="Solicitação Pendente" provider="Brisanet" client="Luan Santos" date="04/06/2024" corTitulo="#EABE2E" />

                <ReportRequest title="Solicitação Confirmada" provider="Brisanet" client="Elias Sales" date="08/09/2024" corTitulo="#34A752" />

                <ReportRequest title="Solicitação Confirmada" provider="Brisanet" client="Breno Lopes" date="05/05/2024" corTitulo="#34A752" />
            </div>
        </div>
    )
}