import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function Header({loggedIn,setLoggedIn,sigInButton}) {
  const [user,setUser] = useContext(UserContext);

  function handleLogOut(){
    setLoggedIn(false)
    setUser({})
  }

  return (
    <div style={{position:'absolute',top:'0px',background:'lightblue',width:'100%'}}>
      {loggedIn ? (
        <div  style={{display:'flex',justifyContent:'flex-end',gap:'30px',alignItems:'center',}}>
          <h2> {user.name}</h2>
          <img src={user.picture} style={{borderRadius:'50%',border:'1px solid black'}} alt="user_profile_photo"/>
          <button
            style={{ background: "red", color: "white",marginRight:'10px' }}
            onClick={handleLogOut}
          >
            LOG OUT
          </button>
        </div>
      ) : (
        <div style={{display:'flex',justifyContent:'flex-end',gap:'30px',alignItems:'center',}}>
          <h2>🥁 Welcome to Podcast App</h2>
          <div style={{paddingRight:'10px'}} ref={sigInButton}></div>
          
        </div>
      )}
    </div>
  );
}

export default Header