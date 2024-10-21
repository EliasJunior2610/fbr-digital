import { useEffect } from "react";
import './MyRequest.css'
import Request from "../Request/Request";

export default function MyRequest() {
    useEffect(() => {
        document.title = 'Minhas Solicitações'
    }, [])

    return (
        <div id="MyRequest">
            <h1>Minhas Solicitações</h1>
            <br /> <br />

            <div className="requests">
                <Request tipo="Instalação" data="30/10/24" horario="12:00-16:00" corBola="green"/>
                <Request tipo="Manutenção" data="29/10/24" horario="15:00-18:00" corBola="green"/>
            </div>

            <br /> <br />

            <div className="requests">
                <Request tipo="Instalação" data="30/10/24" horario="12:00-16:00" corBola="yellow"/>
                <Request tipo="Instalação" data="30/10/24" horario="12:00-16:00" corBola="yellow"/>
            </div>

            <br /> <br />

            <div className="requests">
                <Request tipo="Manutenção" data="29/10/24" horario="15:00-18:00" corBola="red"/>
                <Request tipo="Manutenção" data="29/10/24" horario="15:00-18:00" corBola="red"/>
            </div>
        </div>
    )
}