import { useEffect, useState } from "react";
import './NewService.css';
import { Link } from "react-router-dom";
import MenuAppBar from "../HeaderCliente/headerCliente";

export default function NewService() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        document.title = "Novo Serviço";
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = './assets/favicon.ico';   
        document.head.appendChild(link);
    }, []);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsPopupVisible(true);
    };

    const closePopupAndRedirect = () => {
        setIsPopupVisible(false);
    };

    return (
        <div id="NewService">
            <MenuAppBar />
            <h1>Novo Serviço</h1>
            <div id="lados">
                <div id="etiqueta">
                    <div id="etiqueta-h2">
                        <h2>XXXXXXXXXXX</h2>
                    </div>
                    <div id="etiqueta-h3">
                        <h3>R$ XX,XX/Mês</h3>
                    </div>
                    <div id="etiqueta-p">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Repudiandae quia fuga excepturi veritatis quas nobis ut, <br />quis sed placeat eius fugiat dolore at earum? <br /> Dolores debitis laboriosam <br />distinctio natus autem?</p>
                    </div>
                    <div id="etiqueta-h4">
                        <h4>Assinar agora</h4>
                    </div>
                </div>
                <form action="" id="novo-servico" onSubmit={handleSubmit}>
                    <label htmlFor="servico">Serviço:</label>
                    <input type="text" id="servico" required />

                    <label htmlFor="preco">Preço/Mês:</label>
                    <input type="number" name="preco" id="preco" required />

                    <label htmlFor="descricao">Descrição:</label>
                    <textarea name="descricao" id="descricao" required></textarea>

                    <div id="form-submit">
                        <input type="submit" value="Confirmar" />
                    </div>
                </form>
            </div>

            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Serviço Criado!</h2>
                        <p>Você será redirecionado para a página principal agora.</p>
                        <Link to='/'><button onClick={closePopupAndRedirect}>Concluir</button></Link>
                    </div>
                </div>
            )}
        </div>
    );
}
