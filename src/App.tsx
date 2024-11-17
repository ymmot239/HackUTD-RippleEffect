import { useState } from 'react'
import './App.css'
import { Graph } from './Graph'
import { Sidebar } from './Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <div className='content'>
        <h1>Toyota Data Analysis</h1>
        <Graph/>
        <p>asdhlkfj</p>
          
          
      </div>
  </>
  )
}

export default App
