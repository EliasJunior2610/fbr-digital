import { useEffect } from "react"
import './ServiceRequest.css'

export default function ServiceRequest() {
    useEffect(() => {
        document.title = 'Solicitação de Serviço'
    }, [])
    return (
        <div id="ServiceRequest">
            <h1 id="solicitar">Solicitação de Serviço</h1>
            <form action="" id="servico">
                <label htmlFor="service-type">Tipo de serviço:</label>
                <select name="service-type" id="service-type" required>
                    <option value="install">Instalação</option>
                </select>

                <label htmlFor="favorite-date">Data preferida:</label>
                <input type="date" name="favorite-date" id="favorite-date" lang="pt-BR" required/>

                <label htmlFor="favorite-time">Horário preferido:</label>
                <input type="time" name="favorite-time" id="favorite-time" required/>

                <label htmlFor="observation">Observações (opcional):</label>
                <textarea name="observation" id="observation"></textarea>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}