import React, { useState } from 'react';
import './Registro.css'; 
import Header from '../Header/header';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
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
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Senha"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar Senha"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;