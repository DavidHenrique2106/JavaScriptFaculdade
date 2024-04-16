import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  };

  const handleClick = () => {
    alert(`Nome: ${nome} , Idade: ${idade}`);
  };

  return (
    <div>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleNomeChange} />
      </label>
      <br />
      <label>
        Idade:
        <input type="text" value={idade} onChange={handleIdadeChange} />
      </label>
      <br />
      <button onClick={handleClick}>Exibir Informações</button>
    </div>
  );
}

export default App;
