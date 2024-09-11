import './Registro.css';
import { useState } from 'react';

const Registro: React.FC = () => {
  const [nome, setNome] = useState('');
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  
  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
      <h1>Registro</h1>

      <div>
        <input type='text' placeholder='Nome' required  />
      </div>
      </form>
    </div>
  );
}

export default Registro;