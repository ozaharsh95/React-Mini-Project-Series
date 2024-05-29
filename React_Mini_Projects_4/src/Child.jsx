import React from "react";

function Child({username,setUsername}) {
  function handleClick(){
    setUsername("PWNED;-")
  }
  return (
    <div>
      <button onClick={handleClick}> Boom !!! </button>
      <p>I am Boom {username}  Boy </p>
    </div>
  );
}

export default Child;
