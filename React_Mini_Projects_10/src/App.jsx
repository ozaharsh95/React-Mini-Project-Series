import { useReducer, useState } from 'react'
import './App.css'

/**
 * 
 * useReducer
 * 
 * 1) Complex state na management mate use thay
 * 2) Jyare ek state biji state par depend hoy tyare use thay chhe 
 * 
 */
const logInReducer = (state,action) => {
  switch(action.type){
    case "field": {
      return {
        ...state,
        [action.fieldName] : action.payload
      }
    }
    case "logIn" : {
      return {
        ...state,
        error:"",
      }
    }
    case "success" : {
      return {
        ...state,
        loggedIn:true,
        password:"",
      }
    }
    case "error":{
      return {
        ...state,
        error:"Incorrect username or password",
        loggedIn:false,
        username:"",
        password:"",
      }
    }
    case "logOut" : {
      return {
        ...state,
        loggedIn:false,
      }
    }
    default : return state
  }

}


function App() {
  // const [username,setUsername] = useState("")
  // const [password,setPassword] = useState("")
  // const [loggedIn,setLoggedIn] = useState(false)
  // const [error,setError] = useState("")

  const [state,dispatch] = useReducer(logInReducer,{
    username :"",
    password:"",
    loggedIn:false,
    error:"",
  })

  function handleSubmit(e){
    e.preventDefault()
    // setError("")
    dispatch({type:"logIn"})
    try{
      if(state.username=="harsh"&&state.password=="1234"){
        // setLoggedIn(true)
        dispatch({type:"success"})
      }else{
        throw Error;
      }
    }catch(err){
      // setError("Incorrect Crediential")
      dispatch({type:"error"})
    }
  }
  return (
    <>
      <h1>10-useReducer</h1>
      <div>
        {state.loggedIn ? (
          <>
            <div>
              <h2>Welcome {state.username}!</h2>
              <button 
              // onClick={()=>setLoggedIn(false)} 
              onClick={()=>dispatch({type:"logOut"})}
              style={{color:'white',background:'red'}}>Log Out</button>
            </div>
          </>
        ) : (
          <form style={{display:'flex',flexDirection:'column',gap:'5px'}}
          onSubmit={handleSubmit}
          >
            <input
              type="text"
              autoComplete="username"
              placeholder="username"
              value={state.username}
              //onChange={(e) => setUsername(e.target.value)}
              onChange={(e)=> dispatch({
                type:"field",
                fieldName:"username",
                payload:e.target.value,
              })
              }
            />
            <input
              type="password"
              autoComplete="current-password"
              placeholder="password"
              value={state.password}
              //onChange={(e) => setPassword(e.target.value)}
              onChange={(e)=>dispatch({
                type:"field",
                fieldName:"password",
                payload:e.target.value,
              })}
            />
            <button style={{background:'blue',color:'white'}} type='submit'>Log In</button>
            <p style={{color:'red'}}>{state.error}</p>
          </form>
        )}
       
      </div>
    </>
  );
}

export default App
