import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import Board from './Components/Board'
function App() {
  const [taskList,setTaskList] = useState([]);
  console.log('taskList : ',taskList);
  return (
    <>
      <h1>02-TODO-BOARD</h1>
      <div>
        <Input taskList={taskList} setTaskList={setTaskList}/>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'20px'}}>
       {
        taskList.map((task,i)=>
          <Board 
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
            key={i*Math.random()*100}
          />
        )
       }
      </div>
    </>
  )
}

export default App
