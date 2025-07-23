import { useState } from 'react'
import fileStructure from "./Data/Data"
import Home from './components/Home';
import './App.css'

function App() {
  
  const [data , setData] = useState(fileStructure);


  return (
    <>
      <div className="App">
        <Home data={data}/>
      </div>
    </>
  )
}

export default App
