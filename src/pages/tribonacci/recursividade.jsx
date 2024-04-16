import React, { useState } from 'react';

function RecursiveMethods() {
  const [somaAteN, setSomaAteN] = useState('');
  const [fatorialN, setFatorialN] = useState('');
  const [x, setX] = useState('');
  const [k, setK] = useState('');
  const [tribonacciN, setTribonacciN] = useState('');
  const [pellN, setPellN] = useState('');
  const [somaAteNResultado, setSomaAteNResultado] = useState(null);
  const [fatorialResultado, setFatorialResultado] = useState(null);
  const [potenciaResultado, setPotenciaResultado] = useState(null);
  const [tribonacciResultado, setTribonacciResultado] = useState(null);
  const [pellResultado, setPellResultado] = useState(null);

  const calcularSomaAteN = () => {
    const num = parseInt(somaAteN);
    if (!isNaN(num)) {
      let soma = 0;
      for (let i = 1; i <= num; i++) {
        soma += i;
      }
      setSomaAteNResultado(soma);
    } else {
      setSomaAteNResultado(null);
    }
  };

  const calcularFatorial = () => {
    const num = parseInt(fatorialN);
    if (!isNaN(num)) {
      let resultado = 1;
      for (let i = 2; i <= num; i++) {
        resultado *= i;
      }
      setFatorialResultado(resultado);
    } else {
      setFatorialResultado(null);
    }
  };

  const calcularPotencia = () => {
    const base = parseInt(x);
    const expoente = parseInt(k);
    if (!isNaN(base) && !isNaN(expoente)) {
      let resultado = 1;
      for (let i = 0; i < expoente; i++) {
        resultado *= base;
      }
      setPotenciaResultado(resultado);
    } else {
      setPotenciaResultado(null);
    }
  };

  const calcularTribonacci = () => {
    const num = parseInt(tribonacciN);
    if (!isNaN(num)) {
      const tribonacci = (n) => {
        if (n === 0) return 0;
        if (n === 1 || n === 2) return 1;
        return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
      };
      setTribonacciResultado(tribonacci(num));
    } else {
      setTribonacciResultado(null);
    }
  };

  const calcularPell = () => {
    const num = parseInt(pellN);
    if (!isNaN(num)) {
      const pell = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        let a = 0;
        let b = 1;
        for (let i = 2; i <= n; i++) {
          let c = 2 * b + a;
          a = b;
          b = c;
        }
        return b;
      };
      setPellResultado(pell(num));
    } else {
      setPellResultado(null);
    }
  };

  return (
    <div>
      <h2>Calculadora de Métodos Recursivos</h2>
      <div>
        <label htmlFor="somaAteN">Soma de 1 até N:</label>
        <input
          type="text"
          id="somaAteN"
          value={somaAteN}
          onChange={(e) => setSomaAteN(e.target.value)}
        />
        <button onClick={calcularSomaAteN}>Calcular</button>
        {somaAteNResultado !== null && (
          <p>Resultado: {somaAteNResultado}</p>
        )}
      </div>
      <div>
        <label htmlFor="fatorialN">Fatorial de N:</label>
        <input
          type="text"
          id="fatorialN"
          value={fatorialN}
          onChange={(e) => setFatorialN(e.target.value)}
        />
        <button onClick={calcularFatorial}>Calcular</button>
        {fatorialResultado !== null && (
          <p>Resultado: {fatorialResultado}</p>
        )}
      </div>
      <div>
        <label htmlFor="x">Base (x):</label>
        <input
          type="text"
          id="x"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
        <label htmlFor="k">Expoente (k):</label>
        <input
          type="text"
          id="k"
          value={k}
          onChange={(e) => setK(e.target.value)}
        />
        <button onClick={calcularPotencia}>Calcular</button>
        {potenciaResultado !== null && (
          <p>Resultado: {potenciaResultado}</p>
        )}
      </div>
      <div>
        <label htmlFor="tribonacciN">N-ésimo número de Tribonacci:</label>
        <input
          type="text"
          id="tribonacciN"
          value={tribonacciN}
          onChange={(e) => setTribonacciN(e.target.value)}
        />
        <button onClick={calcularTribonacci}>Calcular</button>
        {tribonacciResultado !== null && (
          <p>Resultado: {tribonacciResultado}</p>
        )}
      </div>
      <div>
        <label htmlFor="pellN">N-ésimo número de Pell:</label>
        <input
          type="text"
          id="pellN"
          value={pellN}
          onChange={(e) => setPellN(e.target.value)}
        />
        <button onClick={calcularPell}>Calcular</button>
        {pellResultado !== null && (
          <p>Resultado: {pellResultado}</p>
        )}
      </div>
    </div>
  );
}

export default RecursiveMethods;
