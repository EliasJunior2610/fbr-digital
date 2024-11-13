import { useEffect, useState } from "react";
import '../MyRequest/MyRequest.css'
import Request from "../MyRequest/Request/Request";
import MenuAppBar from "../HeaderProvedor/headerProvedor";

export default function MyRequest() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState({
        tipo: '',
        data: '',
        horario: '',
        observacoes: ''
    });

    useEffect(() => {
        document.title = "Meus Serviços";
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = './assets/favicon.ico';   
        document.head.appendChild(link);
    }, []);

    const handleRequestClick = (tipo: string, data: string, horario: string, observacoes: string = '') => {
        setSelectedRequest({ tipo, data, horario, observacoes });
        setIsPopupVisible(true); 
    };

    const closePopup = () => {
        setIsPopupVisible(false); 
    };

    const openEditPopup = () => {
        setIsEditPopupVisible(true);
    };

    const handleConfirm = () => {
        console.log('Solicitação confirmada:', selectedRequest);
        closePopup(); 
    };

    const handleEditChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setSelectedRequest({ ...selectedRequest, [event.target.name]: event.target.value });
    };

    const handleSaveEdit = () => {
        console.log('Solicitação alterada:', selectedRequest);
        setIsEditPopupVisible(false); 
    };

    const requestsData = [
        { tipo: "Instalação", data: "30/10/24", horario: "12:00-16:00", observacoes: "Instalar na sala principal.", corBola: "green" },
        { tipo: "Manutenção", data: "29/10/24", horario: "15:00-18:00", observacoes: "Verificar fiação.", corBola: "green" },
        { tipo: "Instalação", data: "30/10/24", horario: "12:00-16:00", observacoes: "Instalar na sala de reunião.", corBola: "yellow" },
        { tipo: "Manutenção", data: "29/10/24", horario: "15:00-18:00", observacoes: "Verificar ar-condicionado.", corBola: "red" },
        { tipo: "Instalação", data: "30/10/24", horario: "12:00-16:00", observacoes: "Configurar sistemas.", corBola: "yellow" },
        { tipo: "Manutenção", data: "29/10/24", horario: "15:00-18:00", observacoes: "Manutenção de rede.", corBola: "red" },
    ];

    return (
        <div id="MyRequest">
            <MenuAppBar />
            <h1>Meus Serviços</h1>
            <br /> <br />

            <div className="requests">
                {requestsData.map((request, index) => (
                    <div key={index} onClick={() => handleRequestClick(request.tipo, request.data, request.horario, request.observacoes)}>
                        <Request tipo={request.tipo} data={request.data} horario={request.horario} corBola={request.corBola} />
                    </div>
                ))}
            </div>

            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Detalhes da Solicitação</h2>
                        <p>Tipo de Serviço: {selectedRequest.tipo}</p>
                        <p>Data: {selectedRequest.data}</p>
                        <p>Horário: {selectedRequest.horario}</p>
                        <p>Observações: {selectedRequest.observacoes}</p>
                        
                        <div className="popup-buttons">
                            <button className="alterar-btn" onClick={openEditPopup}>Alterar</button>
                            <button className="confirmar-btn" onClick={handleConfirm}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}

            {isEditPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Alterar Solicitação</h2>
                        <form>
                            <label htmlFor="tipo">Tipo de Serviço:</label> <br />
                            <select name="tipo" id="tipo" value={selectedRequest.tipo} onChange={handleEditChange}>
                                <option value="Instalação">Instalação</option>
                                <option value="Manutenção">Manutenção</option>
                            </select> <br /> 

                            <label htmlFor="data">Data Preferida:</label> <br />
                            <input type="date" name="data" id="data" value={selectedRequest.data} onChange={handleEditChange} /> <br />

                            <label htmlFor="horario">Horário Preferido:</label> <br />
                            <input type="time" name="horario" id="horario" value={selectedRequest.horario} onChange={handleEditChange} /> <br />

                            <label htmlFor="observacoes">Observações (opcional):</label> <br />
                            <textarea name="observacoes" id="observacoes" value={selectedRequest.observacoes} onChange={handleEditChange}></textarea>
                        </form>

                        <div className="popup-buttons">
                            <button className="cancelar-btn" onClick={() => setIsEditPopupVisible(false)}>Cancelar</button>
                            <button className="confirmar-btn" onClick={handleSaveEdit}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}