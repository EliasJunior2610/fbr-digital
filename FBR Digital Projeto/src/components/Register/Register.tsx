import { useEffect, useState } from "react";
import Header from "../Header/header";
import RegisterClient from "../RegisterClient/RegisterClient";
import RegisterProvider from "../RegisterProvider/RegisterProvider";
import "./Register.css";

export default function Register() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const [etapa, setEtapa] = useState(1);

  const nextStep = () => setEtapa(2);
  const prevStep = () => setEtapa(1);

  return (
    <div id='Register'>
      <Header />
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Cadastrar-se</h2>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nome de Usuário"
              required
            />
          </div>
          <div id="conteudo">
            {etapa === 1 && <RegisterClient />}
            {etapa === 2 && <RegisterProvider />}
          </div>
        </div>
      </div>
    </div>
  );
}
