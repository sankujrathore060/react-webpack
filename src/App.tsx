import React, { useState } from 'react'
import './style.css'
import Image from './react.jpg'
import SVGImage from './react-2.svg'

const App = () => {
  const [counter, setCounter] = useState(0)
  const name = 'Sankuj'
  return (
    <div>
      <h1>React Code asd</h1>
      <img src={Image} height={200} width={200} alt="car" />
      <img src={SVGImage} height={200} width={200} alt="svg car" />
      {process.env.NODE_ENV}
      {process.env.name}
      {name}
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}

export default App
