import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      color:'#4285F4',
       img:'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8', 
      intro:'',
      tag:'satisfied'
    },
    { color:'#EA4335',
      img:'https://media.istockphoto.com/id/2035914780/photo/portrait-of-a-professional-woman-at-work-in-a-stylish-office-with-a-laptop.jpg?s=612x612&w=0&k=20&c=wMiFWwq-xvOJfaXfSa8JszQyyYTnUyP47unrXSe-eac=', 
      intro:'',
      tag:'Underserved'
    },
    { color:'#FBBC04',
      img:'https://img.magnific.com/free-photo/business-woman-suit-standing-window-with-laptop_23-2148071533.jpg?semt=ais_hybrid&w=740&q=80', 
      intro:'',
      tag:'Underbanked'
    },
    { color:'#34A853',
      img:'https://media.istockphoto.com/id/2163956876/photo/young-indian-businesswoman-professional-employee-using-pc-doing-online-banking-analysing-at.jpg?s=612x612&w=0&k=20&c=MUD6-K9x-oFT3fGvmL64AANk6oAOXPKFRRO05Qbi9hs=', 
      intro:'',
      tag:'Underbanked'
    },
    { color:'#833AB4',
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'',
      tag:'Underbanked'
    }

  ]
  return (

    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App