import { useEffect } from "react";
import './NewPlan.css'


export default function NewPlan() {
    useEffect(() => {
        document.title = 'Novo Plano';
    }, []);

    return (
        <div id="NewPlan">
            <h1>Novo Plano</h1>
            <form action="" id="novo-plano">
                <label htmlFor="plano">Plano:</label>
                <input type="text" id="plano" />

                <label htmlFor="preco">Preço/Mês:</label>
                <input type="number" name="preco" id="preco" />

                <label htmlFor="descricao">Descrição:</label>
                <textarea name="descricao" id="descricao"></textarea>
        
                <input type="submit" value="Confirmar" />
            </form>
        </div>
    );
}
