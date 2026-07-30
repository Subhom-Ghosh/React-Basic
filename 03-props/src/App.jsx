import React from 'react'
import Card from './components/Card'
function App() {
  return (
    <div className='parent'>
      <Card user='Piy' age = {20} img='https://images.unsplash.com/photo-1781100037733-fbdfc1629114?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Subhom' age = {21} img='https://images.unsplash.com/photo-1778648185595-6cab6bbd355a?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>

  )
}

export default App