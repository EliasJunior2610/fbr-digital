import './ReportRequest.css'

interface ReportRequestProps {
    title: string
    provider: string
    client: string
    date: string
    corTitulo: string
}

export default function ReportRequest({ title, provider, client, date, corTitulo}: ReportRequestProps) {
    
    return (
        <div id="ReportRequest">
            <div id="titulo" style={{backgroundColor: corTitulo}}>
                <h3>{title}</h3>
            </div>

            <p>Provedor: {provider}</p>
            <p>Cliente: {client}</p>
            <p>Data: {date}</p>
            <button>Exportar</button>
        </div>
    )

}