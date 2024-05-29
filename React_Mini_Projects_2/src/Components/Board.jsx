import React, { useState } from 'react'

const specialStyle = {
  fontWeight:'600',
  fontSize:'1.5em',
  textDecoration:'line-through'
}

function Board({task,taskList,setTaskList}) {
  const [flag,setFlag] = useState(false)
  function handleDelete(){
    let newTaskList = []
    for(let i=0;i<taskList.length;i++){
      if(taskList[i]!=task){
        newTaskList.push(taskList[i])
      }
    }
    setTaskList(newTaskList)
  }
  
  // Another Way of filtering
  /*
  function handleDelete() {
    const filteredTaskList = taskList.filter((t)=>t!=task)
    setTaskList([...filteredTaskList])
  }*/

  function handleDone(){
    setFlag(true)
  }
  
  return (
    <div style={{background:'#D0C8BB',padding:'2px'}}>
      <p style={flag?specialStyle:{fontWeight:'600',fontSize:'1.5em'}}>{task}</p>
      <button style={{background:'red',color:'white',margin:'10px'}} onClick={handleDelete}>DELETE</button>
      <button style={{background:'green',color:'white',margin:'10px'}} onClick={handleDone}>DONE</button>
    </div>
  )
}

export default Board