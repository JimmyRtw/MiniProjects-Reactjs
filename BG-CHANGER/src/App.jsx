import { useState } from 'react'
import './App.css'

function App() {

  const [colour,setColour] = useState("green")

  return (

    <div className='w-full h-screen duration-200' style={{backgroundColor:colour}}>
      <div className="fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setColour("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColour("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColour("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColour("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>Violet</button>
        <button onClick={()=>setColour("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>Oliev</button>
        <button onClick={()=>setColour("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"gray"}}>gray</button>
        <button onClick={()=>setColour("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"white"}}>white</button>
        <button onClick={()=>setColour("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>
    </div>

  )
}

export default App
