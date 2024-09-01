import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [x, setx] = useState([])
  const inputRef = useRef()
  const add = () => {
    const value = inputRef.current.value
    const newData = { completed: false, value }
    setx([...x, newData])
    inputRef.current.value = ''
  }
  const itemDone = (index) => {
    const newX = [...x]
    newX[index].completed = !newX[index].completed
    setx(newX)
  }
  const del = (index) => {
    const newX = [...x]
    newX.splice(index, 1)
    setx(newX)
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='parent-input'>
        <input ref={inputRef} placeholder='Enter your task...'></input>
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {

          x.map(({ value, completed }, index) => {
            return <div className='parent-li'>
              <li className={completed ? "diffstyle" : ""} onClick={() => itemDone(index)}>{index + 1}. {value}</li>
              <span onClick={() => del(index)}>x</span>
            </div>
          })
        }

      </ul>
    </div>
  );
}

export default App;
