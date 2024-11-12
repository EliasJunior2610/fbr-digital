import { useEffect, useState } from "react";
import './ServiceRequest.css';
import { Link } from "react-router-dom";
import MenuAppBar from "../HeaderCliente/headerCliente";

export default function ServiceRequest() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        document.title = 'Solicitação de Serviço';
    }, []);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); 
        setIsPopupVisible(true); 
    };

    const closePopupAndRedirect = () => {
        setIsPopupVisible(false); 
    };

    return (
        <div id="ServiceRequest">
            <MenuAppBar />
            <h1 id="solicitar">Solicitação de Serviço</h1>
            <form action="" id="servico" onSubmit={handleSubmit}>
                <label htmlFor="service-type">Tipo de serviço:</label>
                <select name="service-type" id="service-type" required>
                    <option value="install">Instalação</option>
                    <option value="Maintenance">Manutenção</option>
                </select>

                <label htmlFor="favorite-date">Data preferida:</label>
                <input type="date" name="favorite-date" id="favorite-date" lang="pt-BR" required />

                <label htmlFor="favorite-time">Horário preferido:</label>
                <input type="time" name="favorite-time" id="favorite-time" required />

                <label htmlFor="observation">Observações (opcional):</label>
                <textarea name="observation" id="observation"></textarea>

                <div id="button-send">
                    <input type="submit" value="Enviar" />
                </div>
            </form>

            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Solicitação Concluída!</h2>
                        <p>Para mais informações, aguarde a confirmação!</p>
                        <Link to='/minhas-solicitacoes'><button onClick={closePopupAndRedirect}>Revisar Solicitação</button></Link>
                    </div>
                </div>
            )}
        </div>
    );
}
