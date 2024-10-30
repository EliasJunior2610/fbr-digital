import { Link } from 'react-router-dom'
import './Etiqueta.css'

interface EtiquetaProps {
    h2: string
    h3: string
    p: string
    
}

export default function Etiqueta({ h2, h3, p }: EtiquetaProps) {
    return (
        <div id="etiqueta">
            <div id="etiqueta-h2">
                <h2>{h2}</h2>
            </div>
            <div id="etiqueta-h3">
                <h3>{h3}</h3>
            </div>
            <div id="etiqueta-p">
                <p>{p}</p>
            </div>
            <div id="etiqueta-h4">
                <Link to='/solicitacao'>
                    <h4>ASSINAR AGORA</h4>
                </Link>
            </div>
        </div>
    )
}