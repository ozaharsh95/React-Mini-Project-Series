import { useEffect, useState } from "react";

export default function EditTask({task,taskList,setTaskList}){
    const [editModal,setEditModal] = useState(false);
    const [projectName,setProjectName] = useState("");
    const [taskDescription,setTaskDescription] = useState("");
    
    useEffect(()=>{
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    },[])
   
    const handleInput = (e) => {
      const {name,value} = e.target;
      if(name === "projectName"){
          setProjectName(value);
      }
      if(name === "taskDescription"){
          setTaskDescription(value)
      }
    }
  
    const handleUpdate = (e)=>{
      e.preventDefault();
      let taskIndex = taskList.indexOf(task);
      taskList.splice(taskList,1,{
        projectName:projectName,
        taskDescription:taskDescription,
        timestamp:task.timestamp,
        duration:task.duration 
      });
      localStorage.setItem("taskList",JSON.stringify(taskList));
      window.location.reload();
      setEditModal(false); 
    }


    return (
        <>
            <button className='bg-yellow-600 text-white rounded-lg p-1.5 m-2 hover:opacity-75'
            onClick={()=>setEditModal(true)}
            >
                EDIT
            </button>
            {editModal?
                (
                    <>
                    <div className="overflow-x-hidden overflow-y-auto flex items-center justify-center p-2 inset-0 z-100">
                      <div className="w-9/12 bg-white  rounded-lg shadow-md relative flex flex-col">
                        <div className="flex flex-row justify-between p-5 border-solid border-slate-200 rounded-t">
                          <h1 className="text-3xl font-semibold">EDIT NEW TASK</h1>
                          <button
                            className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold black"
                            onClick={() => setEditModal(false)}
                          >
                            x
                          </button>
                        </div>
                        <form className="p-6">
                          <div>
                            <label
                              className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                              htmlFor="project-name"  
                            >
                              Project Name
                            </label>
                            <input
                              className="w-full bg-white border border-gray-50 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200"
                              id="project-name"
                              name="projectName"
                              type="text"
                              placeholder="Project Name"
                              value={projectName}
                              onChange={handleInput}
                              required
                            />
                          </div>
                          <div>
                              <label
                                  className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                                  htmlFor="taskDescription"
                              >
                                  Text Description
                              </label>
                              <textarea
                                  id="taskDescription"
                                  name="taskDescription"
                                  className="w-full bg- border border-gray-50 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-200"
                                  rows="5"
                                  placeholder="Task Description"
                                  value={taskDescription}
                                  onChange={handleInput}
                              >
                              </textarea>
                          </div>
                        </form>
                        <div className="flex justify-center items-center">
                          <button
                              className="bg-blue-500 text-white font-semibold text-sm px-6 uppercase py-3 rounded hover:opacity-70"
                              onClick={handleUpdate}
                          >
                              EDIT Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )
                : null
            }
        </>
    )
}