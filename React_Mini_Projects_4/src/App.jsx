import { useState } from 'react'
import './App.css'
import Child from './Child'
function App() {
  const [username, setUsername] = useState("")



  return (
    <>
    <h1>04-STATE-AND-PROP</h1>
      <input 
        placeholder='Enter Name'
        type='text'
        id='username'
        name='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <p>Hi {username}</p>
      <p>{username} How is your day buddy ??</p>
      <Child username={username} setUsername={setUsername}/>
    </>
  )
}

export default App
