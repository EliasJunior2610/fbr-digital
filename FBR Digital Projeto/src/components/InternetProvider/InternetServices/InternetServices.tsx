import Etiqueta from "../../Etiqueta/Etiqueta";

export default function InternetServices() {
    return (
        <div id="etiquetas">
            <Etiqueta 
                h2="TV Por Assinatura" 
                h3="R$ 79,99/Mês" 
                p="Acesso a diversos canais de TV por assinatura, com programação variada incluindo filmes, séries, esportes e notícias, perfeito para entretenimento em casa." 
            />

            <Etiqueta 
                h2="Smart Home" 
                h3="R$ 99,99/Mês" 
                p="Serviço ideal para automação residencial, permitindo controlar iluminação, segurança e outros dispositivos conectados via smartphone ou assistente virtual." 
            />

            <Etiqueta 
                h2="Modem" 
                h3="R$ 150,99/Mês" 
                p="Modem de alta performance com suporte a conexões de internet rápida, garantindo estabilidade e velocidade para múltiplos dispositivos em grandes espaços." 
            />
        </div>
    )
}