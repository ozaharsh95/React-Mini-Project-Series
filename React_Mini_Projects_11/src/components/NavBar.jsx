import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div style={{display:'flex',justifyContent:"space-evenly",marginTop:"2px",fontSize:"2em",background:"rgba(238,130,238,0.8)"}}>
        <Link to="/">Home</Link>
        <Link to="/basket">Basket</Link>
    </div>
  )
}

export default NavBar