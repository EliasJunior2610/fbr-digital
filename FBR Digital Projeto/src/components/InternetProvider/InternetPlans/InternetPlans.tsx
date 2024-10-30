import Etiqueta from "../../Etiqueta/Etiqueta";

export default function InternetPlans() {
    
    return (
        <div id="etiquetas">
            <Etiqueta 
                h2="100 MEGA" 
                h3="R$ 79,99/Mês" 
                p="Ideal para navegação moderada, redes sociais e vídeos em HD, com suporte para alguns dispositivos simultâneos." 
            />

            <Etiqueta 
                h2="500 MEGA" 
                h3="R$ 99,99/Mês" 
                p="Perfeito para uso intenso, com suporte a vídeos 4K, jogos online e vários dispositivos conectados." 
            />

            <Etiqueta 
                h2="1000 MEGA" 
                h3="R$ 150,99/Mês" 
                p="Alta performance para grandes residências ou empresas, ideal para uploads, downloads e muitos usuários." 
            />
        </div>
    )
}