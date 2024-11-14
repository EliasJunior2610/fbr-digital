import { useEffect } from 'react';
import Erro from '../../assets/Erro404.png'
import './Error404.css'
import { Link } from 'react-router-dom'


export default function Error404() {
    useEffect(() => {
        document.title = "Erro 404";
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = './assets/favicon.ico';   
        document.head.appendChild(link);
    }, []);
    
    return(
        <div id="Error404">
            <Link to='/'><img src={Erro} alt="Erro 404" /></Link>
        </div>
    )
}