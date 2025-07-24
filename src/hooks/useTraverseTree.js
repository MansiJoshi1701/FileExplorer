const useTraverseTree = () => {

    function insertNode(tree , parentID , item , isFolder) {

        if(parentID == tree.id && tree.isFolder){
            tree.children.unshift({
                id: new Date().getTime,
                name: item,
                isFolder,
                children: []
            });
            
            return tree;

        }

        let latestNode = [];
        latestNode = tree.children.map((obj) => {
            return insertNode(obj,parentID,item,isFolder);
        })

        //I will also have to add this latestNode to my original data's tree
        return {...tree , children: latestNode}
        
    }

    return { insertNode };

}

export default useTraverseTree;