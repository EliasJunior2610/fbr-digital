import './Request.css'

interface RequestProps {
    tipo: string;
    data: string;
    horario: string;
    corBola: string; // Nova prop para definir a cor da bolinha
}

export default function Request({ tipo, data, horario, corBola }: RequestProps) {
    return (
        <div id="Request">
            <div id="request-left">
                <p>Tipo:</p>
                <div id="request-left-bola">
                    <div id="bolinha" style={{ backgroundColor: corBola }}></div> 
                    <h4>{tipo}</h4>
                </div>
            </div>

            <div id="divisor"></div>

            <div id="request-middle">
                <p>Data:</p>
                <h4>{data}</h4>
            </div>

            <div id="divisor"></div>

            <div id="request-right">
                <p>Horário:</p>
                <h4>{horario}</h4>
            </div>
        </div>
    )
}
