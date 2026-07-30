import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Navbar/>
      <div className='card'>
        <h1>Subhom</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur autem, quam numquam cum architecto quod quae magnam quaerat eos qui delectus provident? Assumenda unde optio laudantium! Libero, vero fugit.</p>
      </div>
      <Card/>
      

    </div>
  )
}

export default App