import { useEffect } from "react";
import './NewPlan.css'


export default function NewPlan() {
    useEffect(() => {
        document.title = 'Novo Plano';
    }, []);

    return (
        <div id="NewPlan">
            <h1>Novo Plano</h1>
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
                <form action="" id="novo-plano">
                    <label htmlFor="plano">Plano:</label>
                    <input type="text" id="plano" />

                    <label htmlFor="preco">Preço/Mês:</label>
                    <input type="number" name="preco" id="preco" />

                    <label htmlFor="descricao">Descrição:</label>
                    <textarea name="descricao" id="descricao"></textarea>
            
                    <div id="form-submit">  
                        <input type="submit" value="Confirmar" />
                    </div>
                </form>
            </div>
        </div>
    );
}
