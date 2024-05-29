import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(()=>{
        setTime(time+1)
      },10);
    }else{
      clearInterval(interval);
    }

    return ()=>clearInterval(interval);
  },[running,time])

  return (
    <>
      <h1>01-STOPWATCH</h1>
      <div className="parent-div">
        <div className="display-div">
          <span>{hours <= 9 ? "0" + hours : hours}</span>:
          <span>{minutes <= 9 ? "0" + minutes : minutes}</span>:
          <span>{seconds <= 9 ? "0" + seconds : seconds}</span>
        </div>
        <div>
          {running ? (
            <button className="btn" onClick={() => setRunning(false)}>STOP</button>
          ) : (
            <button className="btn" onClick={() => setRunning(true)}>START</button>
          )}
          <button className="btn" onClick={() => setTime(0)}>RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
