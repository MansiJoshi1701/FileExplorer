import { useState } from "react";

function Home({ data }) {

    console.log(data);
    const [expand , setExpand] = useState(false);
    
    if(data.isFolder) {
        return(
            <div style={ { marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁 {data.name}</span>
                </div>

                <div style={{display: expand ? "block" : "none" , paddingLeft: 25}}>
                    {data.children.map((folder) => {
                        return(
                            <Home data={folder} key={folder.id}/> //This is how to display recursively
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