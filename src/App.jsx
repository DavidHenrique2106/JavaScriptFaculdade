import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const num1 = 10;
const num2 = 20;
const num3 = 30;

const resultado = (num1+num2+num3) / 3

console.log(num1,num2,num3);



  return (
    <>
      <div className="exibir numero">

      <h1>Exibir numeros na tela</h1>

        <p>{num1}</p>
        <p>{num2}</p>
        <p>{num3}</p>
        <hr />
      </div>

      <div className="mediaNumeros">
      <hr />
        <h1>média dos numeros</h1>
        <p>{resultado}</p>
        <hr />
      </div>

      <div className="console">
        <hr />
        <h1>Como ver os números no console.log()</h1>

        <ul>
          <li>Clicar com o botão direito do mouse</li>
          <li>Clicar em "Inspecionar"</li>
          <li>Apertar em "Console"</li>
        </ul>
        <h2>Pronto, agora é só ver os números!</h2>
      </div>
    </>
  )
}

export default App
