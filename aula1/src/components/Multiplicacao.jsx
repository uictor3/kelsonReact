import React from 'react'

const Multiplicacao = (props) => {
  return (
    <div>
      <h1>
        O Resultado da multiplicação do num1 e num2 é igual a: {props.num1 * props.num2}
      </h1>
    </div>
  )
}

export default Multiplicacao