import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandeler=(e)=>{
    e.preventDefault()
    const copyTask = [...task];

    copyTask.push({title,details})
    

    setTask(copyTask)
    
    
    
    setTitle('')
    setDetails('')
    
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }
    
  return (
    <div className='h-screen lg:flex  bg-black text-white'>

      <form onSubmit={(e)=>{
       submitHandeler(e)
      }} className='flex gap-4 lg:w-1/2 p-10  flex-col items-start' action="">
        <h1 className='text-xl font-bold'>Add Notes</h1>

          <input type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 border-2 rounded outline-none'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          
        }}
        />

        <textarea
        className='px-5 w-full font-medium  h-32 py-2 border-2 rounded outline-none'
        placeholder='Write details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
          
        }}
        />
        

        <button className='bg-white active:bg-gray-300 font-medium  w-full text-black px-5 py-2 rounded-2xl outline-none'>Add Note</button>
        
      </form>
      <div className='lg:w-1/2  flex-wrap lg:border-l-2 p-10'>
        <h1 className='text-xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function(elem,idx){
          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black py-8 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] ">
            
           <div>
             <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-sxs font-semibold text-gray-700'>{elem.details}</p>
           </div>
           <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
        
        </div>
      </div>
    </div>
  )
}

export default App