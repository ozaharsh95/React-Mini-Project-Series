import { useState,useEffect,useRef } from 'react'
import './App.css'
import { jwtDecode } from "jwt-decode";
import { UserContext } from './contexts/UserContext';
import Header from './components/Header';
import Podcast from './components/Podcast';


const clientId = ""

const clientSecret = ""

function App() {

  const [user,setUser] = useState({})
  const [loggedIn,setLoggedIn] = useState(false);
  const sigInButton = useRef();
  const [data,setData] = useState([]);

  function handleCallback(res){
    let user = jwtDecode(res.credential);
    setUser(user);
    setLoggedIn(true);
  }

  function handleLogOut(){
    setLoggedIn(false)
    setUser({})
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id : clientId,
      callback : handleCallback
    });

    google.accounts.id.renderButton(
      sigInButton.current,
      { theme : "outline", size : "large"}
    )
  },[loggedIn])
  
  const rssFeed = "https://cdn.atp.fm/rss/public?m2swoudx";
  useEffect(()=>{
    fetch(rssFeed).then(res => res.text())
    .then(str => {
      const parser = new window.DOMParser();
      const data = parser.parseFromString(str, "text/xml");
      const itemList = data.querySelectorAll("item");
      const items = [];
      itemList.forEach((el) => {
        // I personally store only 10 podcast data only for simplicity
        if(items.length<=10){
        
        items.push({
          title: el.querySelector("title").innerHTML,
          pubDate: new Date(
            el.querySelector("pubDate").textContent
          ).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          mp3: el.querySelector("enclosure").getAttribute("url"),
          link: el.querySelector("link").innerHTML,
        });
          
        }
      });
      setData(items)
    })
  },[rssFeed])
  
  console.log(data);
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} sigInButton={sigInButton}/>
      
      {loggedIn ? (
         <div style={{marginTop:'100px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
         {data.map((ep,i)=>
           <Podcast
           key={i}
           title={ep.title}
           pubDate={ep.pubDate}
           link={ep.link}
           mp3={ep.mp3}
           />
           )}
       </div>
      ):null}
     
    </UserContext.Provider>
  )
}

export default App
