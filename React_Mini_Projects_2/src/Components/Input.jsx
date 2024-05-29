import { useState } from 'react'

function Input({taskList,setTaskList}) {
  const [task,setTask] = useState("");
  function handleInput(e){
    setTask(e.target.value)
  }
  function handleTaskList(){
    setTaskList([...taskList,task])
    setTask("")
  }
  return (
    <div style={{display:'flex',justifyContent:'space-between',gap:'20px',alignItems:'center'}}>
        <input 
            type='text'
            id='task'
            name='task'
            value={task}
            placeholder='Enter daily task'
            onChange={(e)=>handleInput(e)}
            style={{height:'30px',flexBasis:'50vw',fontSize:'1em'}}
        />
        <button style={{background:"black",color:'white',fontWeight:'bold'}} onClick={handleTaskList}>ADD</button>
    </div>
  )
}

export default Input