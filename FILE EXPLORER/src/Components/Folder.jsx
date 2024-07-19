import { useState,useEffect } from "react";

export default function Folder({ item, activeObject, setActiveObject ,handleBackendAddObject,handleBackendDeleteObject,handleButtonAddObject,addObject}) {
  const [toExpand, setToExpand] = useState(false);
  const [localAddObject,setLocalAddObject] = useState(false)
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  function isCurrentActive() {
    return item.id === activeObject;
  }

  useEffect(()=>{

      const addLocalObject = (addObject.folder || addObject.file) && isCurrentActive()

      setLocalAddObject(addLocalObject)
    
      if(addLocalObject)
      {
          handleNewObject(addObject.folder)
      }

  },[addObject])

  function handleNewObject(isFolder) {

    if(isCurrentActive()){
      setToExpand(true)
    }
    setShowInput({
      visible: true,
      isFolder,
    });
  }

  function cancleAddingObject()
  {
      handleButtonAddObject('folder',false)
      handleButtonAddObject('file',false)
      setLocalAddObject(false)
  }

  function addNewObject(e)
  {
     if(e.keyCode === 13 && e.target.value)
     {
        handleBackendAddObject(e.target.value,activeObject,showInput.isFolder)

        setActiveObject(item.items[0].id)

        setShowInput((prev) => ({
            ...prev,
            visible: false,
        }))

        cancleAddingObject()
     }
  }


  function getRenderElement() {
    let renderElement;

    if (item.isFolder) {
      renderElement = (
        <>
          <div
            className={`object-container ${isCurrentActive() ? 'active' : ''}`}
            onClick={() => {
              setToExpand(!toExpand);
              setActiveObject(item.id);
            }}
          >
            📁 {item.name}

          </div>
          {toExpand && (
            <>
              <div className="object-items">
                {showInput.visible && localAddObject && (
                    <div className="object-container">
                    {showInput.isFolder ? '📁' : '🗃️'}{' '}
                        <input
                            autoFocus
                            type="text"
                            onBlur={() =>
                            {
                              setShowInput((prev) => ({
                                ...prev,
                                visible: false,
                              }))
                              setActiveObject(activeObject)
                              cancleAddingObject()
                            }
                            }
                            onKeyDown={(e)=>{addNewObject(e)}}
                        />
                    </div>
                )}
                {item.items.map((child) => (
                  <Folder
                    key={child.id}
                    item={child}
                    activeObject={activeObject}
                    setActiveObject={setActiveObject}
                    handleBackendAddObject={handleBackendAddObject}
                    handleBackendDeleteObject={handleBackendDeleteObject}
                    addObject={addObject}
                    handleButtonAddObject={handleButtonAddObject}
                  />
                ))}
              </div>
            </>
          )}
        </>
      );
    } else {
      renderElement = (
        <>
          <div
            className={`object-container ${isCurrentActive() ? 'active' : ''}`}
            onClick={() => {
              setToExpand(!toExpand);
              setActiveObject(item.id);
            }}
          >
            🗃️ {item.name}
          </div>
        </>
      );
    }

    return renderElement;
  }

  return (
    <>
      <div>{getRenderElement()}</div>
    </>
  );
}
