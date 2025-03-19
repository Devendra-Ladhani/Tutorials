import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-screen h-screen duration-200"
         style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
                <button onClick={ () => {setColor("red")} } className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "red"}}>Red</button>
                <button onClick={ () => {setColor("green")} } className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "green"}}>Green</button>
                <button onClick={ () => {setColor("blue")} } className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
                <button onClick={ () => {setColor("black")} } className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "Black"}}>Black</button>
                <button onClick={ () => {setColor("olive")} } className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "Olive"}}>Olive</button>
                <button onClick={ () => {setColor("pink")} } className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "pink"}}>Pink</button>
                <button onClick={ () => {setColor("yellow")} } className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "Yellow"}}>Yellow</button>
                <button onClick={ () => {setColor("gray")} } className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "gray"}}>Gray</button>
                <button onClick={ () => {setColor("Purple")} } className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "Purple"}}>Purple</button>
                <button onClick={ () => {setColor("lavender")} } className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "Lavender"}}>Lavender</button>
                <button onClick={ () => {setColor("white")} } className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "White"}}>White</button>
            </div>
        </div>
    </div>
  )
}

export default App
