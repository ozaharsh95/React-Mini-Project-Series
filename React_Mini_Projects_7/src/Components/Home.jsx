import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../Contexts/UserContext";

const liStyle = {
  background: "tomato",
  padding: "10px",
  border: "1px solid red",
  borderRadius: "10px",
  color: "white",
};
function Home() {
  const [user,setUser ] = useContext(UserContext);
  return (
    <div>
      <h1>07 - useContext</h1>
      <div style={{border:'1px dotted gray',marginBottom:'20px'}}>
        <h2>{user}'s Home Page</h2>
        <button style={{background:'blue',color:'#fff'}} onClick={()=>setUser("Adirsh")}>EDIT USER</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link style={liStyle} to="/dashboard">
          Dashboard
        </Link>
        <Link style={liStyle} to="/rec">
          Rec
        </Link>
        <Link style={liStyle} to="/podcast">
          Podcast
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
