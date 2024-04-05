import React, { useState } from 'react';

const Exercicios = () => {
  // Estados para armazenar entradas do usuário e resultados
  const [base, setBase] = useState('');
  const [expoente, setExpoente] = useState('');
  const [numeros, setNumeros] = useState([]);
  const [nFibonacci, setNFibonacci] = useState('');
  const [numeroFatorial, setNumeroFatorial] = useState('');
  const [numerosAnalise, setNumerosAnalise] = useState([]);
  const [inputFatorial, setInputFatorial] = useState('');
  const [analiseResultado, setAnaliseResultado] = useState({});
  const [fatorialResultado, setFatorialResultado] = useState('');
  const [conjuntoNumeros, setConjuntoNumeros] = useState([]);
  const [numeroPrimo, setNumeroPrimo] = useState('');
  const [nPrimos, setNPrimos] = useState('');
  const [notas, setNotas] = useState([]);


  // 1
  const calcularPotencia = (base, expoente) => {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
      resultado *= base;
    }
    return resultado;
  };

  //  2
  const contarParesImpares = (numeros) => {
    const resultado = { pares: 0, impares: 0 };
    numeros.forEach(numero => {
      if (numero % 2 === 0) resultado.pares++;
      else resultado.impares++;
    });
    return resultado;
  };

  // 3 
  const gerarFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  //  4: 
  const calcularFatorial = (n) => {
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
      fatorial *= i;
    }
    return fatorial;
  };

  // 5
  const analisarNumeros = (numeros) => {
    let menor = numeros[0], maior = numeros[0], soma = 0;
    numeros.forEach(num => {
      if (num < menor) menor = num;
      if (num > maior) maior = num;
      soma += num;
    });
    return { menor, maior, soma };
  };

    //6
  const numerosFiltrados = numerosAnalise.filter(num => num >= 0 && num <= 1000);
  if (numerosFiltrados.length === 0) {
    setAnaliseResultado({ menor: 'N/A', maior: 'N/A', soma: 0 });
    return;
  }
  const menor = Math.min(...numerosFiltrados);
  const maior = Math.max(...numerosFiltrados);
  const soma = numerosFiltrados.reduce((acc, num) => acc + num, 0);
  setAnaliseResultado({ menor, maior, soma });
};

// 7
const calcularFatorialComRestricoes = () => {
  const n = parseInt(inputFatorial);
  if (n < 0 || n >= 16) {
    setFatorialResultado('Erro: O número deve ser entre 0 e 15.');
    return;
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  setFatorialResultado(`Fatorial de ${n} é ${resultado}`);
};

  // 8
  const verificarPrimo = (numero) => {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    return numero > 1;
  };

  // 9
  const encontrarDivisores = (numero) => {
    let divisores = [];
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        divisores.push(i, numero / i);
      }
    }
    return divisores.length > 0 ? divisores : `${numero} é primo`;
  };

  //10
  const primosEDivisoes = (n) => {
    let primos = [], divis}
