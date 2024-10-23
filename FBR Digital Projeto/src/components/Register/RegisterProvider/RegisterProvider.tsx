import { useEffect, useState } from "react";
import "./RegisterProvider.css";
import { Link } from "react-router-dom";
import estados from "./estados.json";

interface Estado {
  sigla: string;
  nome: string;
}

interface FormData {
  campo0: string;
  campo1: string;
  campo2: string;
  campo3: string;
  campo4: string;
  campo5: string;
  campo6: string;
  campo7: string;
  campo8: string;
  campo9: string;
  campo10: string;
  campo11: string;
  campo12: string;
}

export default function RegisterProvider() {
  useEffect(() => {
    document.title = "Cadastro Provedor";
  }, []);

  const [etapa, setEtapa] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    campo0: "",
    campo1: "",
    campo2: "",
    campo3: "",
    campo4: "",
    campo5: "",
    campo6: "",
    campo7: "",
    campo8: "",
    campo9: "",
    campo10: "",
    campo11: "",
    campo12: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setEtapa(etapa + 1);
  const prevStep = () => setEtapa(etapa - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const estadosTyped: Estado[] = estados;

  return (
    <div id="Página">
      <div id="RegistroProvedor">
        <form onSubmit={handleSubmit}>
          <h1>Registro</h1>
          {etapa === 1 && (
            <>
              <div id="input-container">
                <input
                  type="text"
                  id="campo1"
                  name="campo1"
                  value={formData.campo1}
                  onChange={handleChange}
                  placeholder="Nome da Empresa:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo2"
                  name="campo2"
                  value={formData.campo2}
                  onChange={handleChange}
                  placeholder="CNPJ:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="tel"
                  id="campo3"
                  name="campo3"
                  value={formData.campo3}
                  onChange={handleChange}
                  placeholder="Telefone:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo4"
                  name="campo4"
                  value={formData.campo4}
                  onChange={handleChange}
                  placeholder="Email:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="password"
                  id="campo5"
                  name="campo5"
                  value={formData.campo5}
                  onChange={handleChange}
                  placeholder="Senha:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="password"
                  id="campo6"
                  name="campo6"
                  value={formData.campo6}
                  onChange={handleChange}
                  placeholder="Confirmar-Senha:"
                  required
                />
              </div>
              <div id="button">
                <Link to="">
                  <button>Mais Tarde</button>
                </Link>
                <button onClick={nextStep}>Próximo</button>
              </div>
            </>
          )}
          {etapa === 2 && (
            <>
              <div id="input-container">
                <input
                  type="text"
                  list="opcoes"
                  id="campo7"
                  name="campo7"
                  value={formData.campo7}
                  onChange={handleChange}
                  placeholder="Estado:"
                  required
                />
                <datalist id="opcoes">
                  {estadosTyped.map((estado: Estado) => (
                    <option key={estado.sigla} value={estado.sigla}>
                      {estado.nome}
                    </option>
                  ))}
                </datalist>
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo0"
                  name="campo0"
                  value={formData.campo8}
                  onChange={handleChange}
                  placeholder="CEP:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo8"
                  name="campo8"
                  value={formData.campo8}
                  onChange={handleChange}
                  placeholder="Cidade:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo9"
                  name="campo9"
                  value={formData.campo9}
                  onChange={handleChange}
                  placeholder="Logradouro:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo10"
                  name="campo10"
                  value={formData.campo10}
                  onChange={handleChange}
                  placeholder="Bairro:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo11"
                  name="campo11"
                  value={formData.campo11}
                  onChange={handleChange}
                  placeholder="Número:"
                  required
                />
              </div>
              <div id="input-container">
                <input
                  type="text"
                  id="campo12"
                  name="campo12"
                  value={formData.campo12}
                  onChange={handleChange}
                  placeholder="Complemento(opcional):"
                />
              </div>
              <div id="button">
                <button type="button" onClick={prevStep}>
                  Voltar
                </button>
                <button type="submit">Enviar</button>
              </div>
            </>
          )}
          <div id="decoration">
            <div className={`ball ${etapa === 1 ? "active" : ""}`}></div>
            <div className={`ball ${etapa === 2 ? "active" : ""}`}></div>
          </div>
        </form>
      </div>
    </div>
  );
}
