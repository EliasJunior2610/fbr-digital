import Header from "../Header/header";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="Página">
      <Header />
      <div id="Login">
        <form action="">
          <h1>Login</h1>
          <div className="input-container">
            <div id="email"><input type="email" placeholder="E-mail:" id="usuario"/></div>
            <svg  className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/></svg>
          </div>
          <div className="input-container">
            <div id="password"><input type="password" placeholder="Senha:" id="senha"/></div>
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"/></svg>
          </div>
          <div className="checkbox-forgot">
            <label>
              <input type="checkbox" name="" id="" />
              Lembre de mim
            </label>
            <label htmlFor="">Esqueceu a senha?</label>
          </div>
          <div id="button"><input type="submit" value="Entrar" /></div>
          <Link to="/registro"><label htmlFor="">Cadastrar-se</label></Link>
        </form>
      </div>
    </div>
  )
}