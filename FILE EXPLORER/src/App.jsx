import { useState } from "react"
import explorer from "./data/folderData"
import Folder from "./Components/Folder"
import useTraverseTree from "./hooks/use-traverse-tree"

function App() {

  const [explorerData,setExplorerData] = useState(explorer)
  const [activeObject,setActiveObject] = useState(0)
  const [addObject,setAddObject] = useState({'folder':false,'file':false})

  const {insertNode,deleteNode} = useTraverseTree()

  function handleButtonAddObject(object,value)
  {
    if(activeObject===0) return

    setAddObject((prevAddObject)=>{
        return {
          ...prevAddObject,
          [object]:value
        }
      })
  }

  function handleButtonDeleteObject()
  {
      if(activeObject===0) return

      handleBackendDeleteObject(activeObject)
      setActiveObject({'folder':false,'file':false})
      setActiveObject(0)
  }

  function handleBackendAddObject(objectName,parentId,isFolder)
  {
      const finalTree = explorerData.map((item)=>{
        return insertNode(item,objectName,parentId,isFolder)
      })

      setExplorerData(finalTree)
  }

  function handleBackendDeleteObject(objectId)
  {
    const finalTree = explorerData
        .filter(item => item !== null && item !== undefined) // Filter out null or undefined items
        .map(item => deleteNode(item, objectId));

    setExplorerData(finalTree[0] ? finalTree : [])
  }

  return (
    <>
        <div className="button-container">
          <button onClick={()=>handleButtonAddObject('folder',true)}>+📁</button>
          <button onClick={()=>handleButtonAddObject('file',true)}>+🗃️</button>
          <button onClick={()=>handleButtonDeleteObject()}><i className="bi bi-trash"></i></button>
        </div>

        <div className="file-explorer-container">
        {

          explorerData.length>0 &&

          explorerData.map((item)=>{
            
            return <Folder 

              key={item.id} 
              item={item}
              activeObject={activeObject}
              setActiveObject={setActiveObject}
              handleBackendAddObject={handleBackendAddObject}
              handleBackendDeleteObject={handleBackendDeleteObject}
              addObject={addObject}
              handleButtonAddObject={handleButtonAddObject}
            />
            
          })

        }
      </div>
    </>
  )
}

export default App
