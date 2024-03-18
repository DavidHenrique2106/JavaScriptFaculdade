// pages/Aulas/Aulass.jsx
import React from 'react';

function Aulass() {
  // Exercício 1s
  function VerificarSaldo({ saldo }) {
    return (
      <div>
        {saldo > 0 ? <p>Saldo positivo</p> : <p>Saldo negativo</p>}
      </div>
    );
  }

  // Exercício 2
  function RealizarSaque({ saldoAtual, valorSaque }) {
    const handleSaque = () => {
      if (valorSaque <= saldoAtual) {
        const novoSaldo = saldoAtual - valorSaque;
        alert(`Saque realizado com sucesso. Saldo atual: R$${novoSaldo}`);
      } else {
        alert('Saldo insuficiente');
      }
    };

    return (
      <button onClick={handleSaque}>
        Realizar Saque
      </button>
    );
  }

  // Exercício 3
  function RealizarDeposito({ saldoAtual, valorDeposito }) {
    const handleDeposito = () => {
      const novoSaldo = saldoAtual + valorDeposito;
      alert(`Depósito realizado com sucesso. Novo saldo: R$${novoSaldo}`);
    };

    return (
      <button onClick={handleDeposito}>
        Realizar Depósito
      </button>
    );
  }

  // Exercício 4
  function RealizarTransferencia({ saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia }) {
    const handleTransferencia = () => {
      if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
        const novoSaldoOrigem = saldoOrigem - valorTransferencia;
        const novoSaldoDestino = saldoDestino + valorTransferencia;
        alert('Transferência realizada com sucesso');
      } else if (valorTransferencia > saldoOrigem) {
        alert('Saldo insuficiente para transferência');
      } else {
        alert('Valor excede o limite de transferência');
      }
    };

    return (
      <button onClick={handleTransferencia}>
        Realizar Transferência
      </button>
    );
  }

  // Exercício 5
  function ChecarChequeEspecial({ saldo }) {
    return (
      <div>
        {saldo < 0 ? <p>Dentro do limite do cheque especial</p> : <p>Fora do limite do cheque especial</p>}
      </div>
    );
  }

  // Exercício 6
  function AtualizarCadastro({ cadastroAtivo, saldo }) {
    return (
      <div>
        {cadastroAtivo ? (
          saldo > 0 ? <p>Cadastro ativo e saldo positivo</p> : <p>Cadastro ativo mas precisa regularizar saldo</p>
        ) : (
          <p>Por favor, atualize seu cadastro</p>
        )}
      </div>
    );
  }

  // Exercício 7
  function AvaliarCredito({ saldo, historicoCredito, rendaMensal }) {
    return (
      <div>
        {saldo > 1000 && historicoCredito && rendaMensal > 3000 ? (
          <p>Crédito aprovado</p>
        ) : (
          <p>Crédito negado</p>
        )}
      </div>
    );
  }

  return (
    <div className="Aulas">
      <h1>Exemplo de Aplicativo Bancário - Aulas</h1>
      <VerificarSaldo saldo={100} />
      <RealizarSaque saldoAtual={1000} valorSaque={500} />
      <RealizarDeposito saldoAtual={500} valorDeposito={200} />
      <RealizarTransferencia saldoOrigem={500} saldoDestino={1000} valorTransferencia={200} limiteTransferencia={500} />
      <ChecarChequeEspecial saldo={-100} />
      <AtualizarCadastro cadastroAtivo={true} saldo={500} />
      <AvaliarCredito saldo={1500} historicoCredito={true} rendaMensal={4000} />
    </div>
  );
}

export default Aulass;
