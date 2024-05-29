import React,{useEffect, useState} from "react";
import {AddTask}  from "./components/AddTask";
import Todo from "./components/Todo";

function App() {
  const [taskList,setTaskList] = useState([]);

  useEffect(()=>{
    let array = localStorage.getItem("taskList")

    if(array){
      setTaskList(JSON.parse(array))
    }
  },[])

  return (
    <>
      <div className="text-center m-2">
        <h1 className="text-4xl">Task Tracker</h1>
        <p>Click +New to add a new task</p>
      </div>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
      <h1 className="text-4xl text-center">To Do :</h1>
      <div>
        {taskList.map((task, i) => (
            <Todo key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList}/>
        ))}
      </div>
    </>
  );
}

export default App;
