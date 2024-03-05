import React, { useState } from 'react';

const Aula1 = () => {
  const [nota, setNota] = useState('');
  const [resultado, setResultado] = useState('');

  const handleNota = () => {
    if (nota >= 7.5) {
      setResultado('Parabéns! Você foi aprovado.');
    } else {
      setResultado('Triste! Você não atingiu a nota mínima para aprovação.');
    }
  };

  return (
    <div className="Aula1">
      <input
        type="number"
        placeholder="Digite sua nota"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      />
      <button onClick={handleNota}>Verificar Aprovação</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default Aula1;
