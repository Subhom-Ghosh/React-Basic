import React from 'react'

const App = () => {

    const user = {
      username:'Subhom',
      age:69,
      city:'India'
    }
    
    localStorage.setItem('user',JSON.stringify())
    const usera = JSON.parse(localStorage.getItem('user'))

    console.log(usera);
    
    
  return (
    <div>
    
    </div>
  )
}

export default App