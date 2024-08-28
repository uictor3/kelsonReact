import React from 'react'
import Adicao from './components/adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={4} num2={2}/>

      <Subtracao num1={4} num2={2}/>

      <Multiplicacao num1={4} num2={2}/>

      <Divisao num1={4} num2={2}/>

      <PrecisoEstudar tecnologia = "React"/>
    </div>
  )
}

export default App