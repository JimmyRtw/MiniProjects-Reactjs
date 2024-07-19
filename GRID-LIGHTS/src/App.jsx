import { useEffect, useState } from "react";

function App() {

  const [gridComponent, setGridComponent] = useState(null);
  const [gridStatusArray, setGridStatusArray] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]);
  const [gridArray, setGridArray] = useState([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]);
  const [indexTrackArray,setIndexTrackArray] = useState([])
  const [onesCount,setCountOnes] = useState(0)

  useEffect(() => {
    setGridComponent(createGrid(gridArray));
    countOnesInGrid(gridArray)
  }, [gridArray, gridStatusArray]);

  function countOnesInGrid(gridArray) {
    const count = gridArray.reduce(
      (acc, row) => acc + row.reduce((rowAcc, cell) => rowAcc + (cell === 1 ? 1 : 0), 0),
      0
    );
    setCountOnes(count);
  }

  function handleSetGridStatusArray(rowIndex, colIndex) {
    const newGridStatusArray = gridStatusArray.map((row, rIndex) =>
      row.map((col, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? (col === 1 ? 0 : 1) : col
      )
    );

    setGridStatusArray(newGridStatusArray);

    if (newGridStatusArray[rowIndex][colIndex]) {

      const updatedIndexTrackArray = [...indexTrackArray, [rowIndex, colIndex]];
      setIndexTrackArray(updatedIndexTrackArray);

      if (updatedIndexTrackArray.length === onesCount) {
        // Pop all indices and make values of gridStatusArray 0 at 300ms intervals
        const reverseArray = updatedIndexTrackArray.reverse()

        reverseArray.forEach(([rIndex, cIndex], i) => {
            setTimeout(() => {
                setGridStatusArray(prevGridStatusArray => {
                    const newGridStatusArray = prevGridStatusArray.map(row => [...row]);
                    newGridStatusArray[rIndex][cIndex] = 0;
                    return newGridStatusArray;
                });
            }, (i+1)* 300);
        });

        // Clear the indexTrackArray after processing
        setIndexTrackArray([]);
    }
  }
  else
  {
    const updatedIndexTrackArray = indexTrackArray.filter(([r, c]) => !(r === rowIndex && c === colIndex));
    setIndexTrackArray(updatedIndexTrackArray);      
  }

  }

  function createGrid(gridArray) {
    const component = (
      <div className="main-container">
        {gridArray.map((row, row_index) => (
          <div className="row-container" key={row_index}>
            {row.map((ele, ele_index) => (
              <div
                key={ele_index}
                onClick={() => {ele===1 && handleSetGridStatusArray(row_index, ele_index)}}
                className={`ele-container ${(ele === 0) ? 'none' : ''} ${(gridStatusArray[row_index][ele_index] === 1) ? 'active' : ''}`}
              >
              </div>
            ))}
          </div>
        ))}
      </div>
    );
    return component;
  }

  return (
    <div>{gridComponent}</div>
  );
}

export default App;
