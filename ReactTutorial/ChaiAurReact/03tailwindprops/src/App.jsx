import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username :'dev'
  }
  return (
    <>
      <h1 className = "bg-green-500 underline text-stone-950 p-4 rounded-xl">Tailwind Test</h1>
      <Card username="Erin Lanford"/>
      <Card/>
    </>
  )
}

export default App
