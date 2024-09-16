import "./Login.css";

export default function Login() {
  return (
    <div id="Login">
      <form action="">
        <h1>Login</h1>
        <div id="email"><input type="email" placeholder="E-mail:" id="usuario"/></div>
        <div id="password"><input type="password" placeholder="Senha:" id="senha"/></div>
        <label>
          <input type="checkbox" name="" id="" />
          Lembre de mim
        </label>
        <div id="forgotPassoword"><label htmlFor="">Esqueceu a senha?</label></div>
        <div id="button"><input type="submit" value="Entrar" /></div>
        <label htmlFor="">Cadastrar-se</label>
      </form>
    </div>
  )
}
