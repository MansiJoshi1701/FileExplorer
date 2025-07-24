import { useState } from "react";

function Home({ handleInsertNode , data }) {

    const [expand , setExpand] = useState(false);
    const [showInput , setShowInput] = useState({
        isVisible: false,
        isFolder: null
    });

    const handleClick = (e , isFolder) => {
        e.stopPropagation();
        setShowInput({
            isVisible: true,
            isFolder
        });
    }


    const addNewFolder = (e) => {

        //e.keycode === 13 , is basically to check that the key pressed is 'Enter'
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(data.id,e.target.value,showInput.isFolder)
            setShowInput({...showInput , isVisible: false});
        }
        

    }
    
    if(data.isFolder) {
        return(
            <div style={ { marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁 {data.name}</span>
                    <div>
                        <button onClick={(e) => handleClick(e , true)}>Folder +</button>
                        <button onClick={(e) => handleClick(e , false)}>File +</button>
                    </div>
            
                </div>

                {
                    showInput.isVisible && (
                        <div className="inputContainer" style={{paddingLeft: 25}}>
                            <span>{showInput.isFolder ? "📁" : "📃"}</span>
                            <input 
                                type="text"
                                className="inputContainer_input" 
                                autoFocus
                                onBlur={() => setShowInput({...showInput , isVisible: false})}
                                onKeyDown={addNewFolder}
                            />
                        </div>
                    )
                }

                <div style={{display: expand ? "block" : "none" , paddingLeft: 25}}>
                    
                    {data.children.map((folder) => {
                        return(
                            <Home handleInsertNode={handleInsertNode} data={folder} key={folder.id}/> //This is how to display recursively
                        )
                    })
                    }
                </div>
            </div>
        )
    } else{
        return(
            <span className="file">📃 {data.name}</span>
        )
    }

}

export default Home;