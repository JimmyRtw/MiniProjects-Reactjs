
const useTraverseTree = ()=>{

    function insertNode(folderTree,objectName,parentId,isFolder)
    {
        if((folderTree.id===parentId )&& folderTree.isFolder)
        {
            const newItem = {
                id : new Date().getTime(),
                name:objectName,
                isFolder,
                items:[]
            }

            folderTree.items.unshift(newItem)

            return folderTree
        }

        let newFolderTree = []

        newFolderTree = folderTree.items.map((item)=>{
            return insertNode(item,objectName,parentId,isFolder)
        })

        return {...folderTree,items : newFolderTree}
    }

    function deleteNode(folderTree, objectId) {
        if (folderTree.id === objectId) {
            return null;
        }
    
        let newFolderTree = [];
    
        newFolderTree = folderTree.items
            .map((item) => {
                return deleteNode(item, objectId);
            })
            .filter(item => item !== null); 
    
        return { ...folderTree, items: newFolderTree };
    }

    return {insertNode,deleteNode}
}

export default useTraverseTree