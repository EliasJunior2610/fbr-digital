import Logo from '../../assets/Marca FBR.png'
import './Error404.css'
import { Link } from 'react-router-dom'

export default function Error404() {
    return(
        <div id="Error404">
            <Link to='/'><img src={Logo} alt="Logo FBR" /></Link>
            <p id="volta">Para voltar à tela inicial do site, clique na logo da FBR.</p>
            <div id="meio">
            <h1 id='Erro'>404</h1>
            <h2 id='notFound'>Não encontramos essa página! :(</h2>
            <p id="verificar">Verifique se a url da página foi digitada de maneira incorreta na barra de endereço do navegador e tente novamente.</p>
            </div>
        </div>
    )
}