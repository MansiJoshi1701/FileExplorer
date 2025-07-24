import { useState } from 'react'
import fileStructure from "./Data/Data"
import Home from './components/Home';
import useTraverseTree from './hooks/useTraverseTree'
import './App.css'

function App() {
  
  const [data , setData] = useState(fileStructure);

  const { insertNode } = useTraverseTree();

//I wan't to first get the new tree & then, also update the original data with this new tree, hence
//encapsulating it inside a separate function. Now i can pass this separate function to Home component
const handleInsertNode = (parentID,item,isFolder) => {

  const finalTree = insertNode(data, parentID, item, isFolder);
  setData(finalTree);

}
  

  return (
    <>
      <div className="App">
        <Home handleInsertNode={handleInsertNode}  data={data}/>
      </div>
    </>
  )
}

export default App
