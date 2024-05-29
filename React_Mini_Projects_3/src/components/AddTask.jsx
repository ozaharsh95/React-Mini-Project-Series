import React, { useState } from "react";

export const AddTask = ({taskList,setTaskList}) => {
  const [addModal, setAddModel] = useState(false);
  const [projectName,setProjectName] = useState("");
  const [taskDescription,setTaskDescription] = useState("");
  const [errMsg,setErrMsg] = useState("");
 
  const handleInput = (e) => {
    const {name,value} = e.target;
    if(name === "projectName"){
        setProjectName(value);
        setErrMsg("");
    }
    if(name === "projectName" && value === ""){
      setErrMsg("Enter Project name to continue")
    }
    if(name === "taskDescription"){
        setTaskDescription(value)
    }
  }

  const handleAddTask = (e)=>{
    e.preventDefault();
    if(!projectName){
      setErrMsg("Enter project name")
    }else{
      let timestamp = new Date();
      let tempList = taskList;
      tempList.push({
        projectName,
        taskDescription,
        timestamp:timestamp,
        duration:0
      })
      localStorage.setItem("taskList",JSON.stringify(tempList))
      window.location.reload();
      setAddModel(false);
      setProjectName("");
      setTaskDescription("");
    }
    
  }


  return (
    <>
      <button
        className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-55"
        type="button"
        onClick={() => setAddModel(true)}
      >
        
        + NEW
      </button>
      {addModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto flex items-center justify-center p-2 inset-0 z-100">
            <div className="w-9/12 bg-white  rounded-lg shadow-md relative flex flex-col">
              <div className="flex flex-row justify-between p-5 border-solid border-slate-200 rounded-t">
                <h1 className="text-3xl font-semibold">ADD NEW TASK</h1>
                <button
                  className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold black"
                  onClick={() => setAddModel(false)}
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
                  <p className="text-red-600 text-center mt-2 mb-5">{errMsg}</p>
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
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
