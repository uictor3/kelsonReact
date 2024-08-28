import React from 'react'

const Adicao = (props) => {
  return (
    <div>
        <h1>O Resultado de num1+num2 é igual: 
            {props.num1 + props.num2}</h1>
    </div>
  )
}

export default Adicao