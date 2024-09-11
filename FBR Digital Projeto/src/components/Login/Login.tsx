import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  // CRIAÇÃO DAS VARIAVEIS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // ENVIAR PARA O BACKEND
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha</a>
        </div>

        <button>Entrar</button>

        <div className="singUp-link">
          <p>Não tem conta?</p>
          <a href="#">Cadastre-se</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
