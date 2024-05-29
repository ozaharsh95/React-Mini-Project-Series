import React, { useEffect, useState } from 'react'
import EditTask from './EditTask';
function Todo({task,index,taskList,setTaskList}) {

  const [time,setTime] = useState(task.duration);
  const [running,setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(() => {
          setTime((prevTime)=>prevTime+10)
      }, 10)
    }else if(!running){
      clearInterval(interval)
    }
    return ()=>clearInterval(interval)
  },[running])

  const handleDelete=(itemID)=>{
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex,1);
    localStorage.setItem("taskList",JSON.stringify(taskList));
    window.location.reload();
    // setTaskList((currentTasks => currentTasks.filter(todo => todo.id !== itemID)))

  }

  const handleStop=()=>{
    setRunning(false);

    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex,1,{
      projectName:task.projectName,
      taskDescription:task.taskDescription,
      timestamp:task.timestamp,
      duration:time 
    })

    localStorage.setItem("taskList",JSON.stringify(taskList))
    window.location.reload();
  }

  return (
    <div className='flex flex-col justify-start bg-white gap-5 p-5 m-5 border-2 border-solid border-gray-800'>
        <div className='flex flex-row justify-between'>
            <p className='font-medium'>{task.projectName}</p>
            <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <p>{task.taskDescription}</p>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-evenly">
                    <div className="sm:w-1/4 text-xl font-semibold py-4">
                        <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                        <span className="text-sm">:{("0" + ((time / 10) % 100)).slice(-2)}</span>
                    </div>
                    <div className="flex flex-row justify-evenly gap-4">
                        {running ? (
                            <button
                                className="border rounded-lg py-1 px-3"
                                onClick={handleStop}
                            >
                                Stop
                            </button>
                        ) : (
                            <button
                                className="border rounded-lg py-1 px-3"
                                onClick={() => { setRunning(true) }}
                            >
                                Start
                            </button>
                        )}
                        <button
                            className="border rounded-lg py-1 px-3"
                            onClick={() => { setTime(0) }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
        <div className='flex justify-center'>
            <button className='bg-red-600 text-white rounded-lg p-1.5'
            onClick={handleDelete}
            >DELETE</button>
        </div>
    </div>
  );
}

export default Todo