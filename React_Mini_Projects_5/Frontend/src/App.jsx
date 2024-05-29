import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Feed from './Feed';
function App() {
  const [articles,setArticles] = useState([]);

  const getArticles = async () => {
    try{
      const res = await axios.get("http://127.0.0.1:4000/");
      setArticles(res.data);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getArticles();
  },[])

  return (
    <>
      <h1>05-RSS-FEEDER</h1>
      <div style={{background:"#212121",marginBottom:'50px'}}>
        <img src='https://cdn-images-1.medium.com/v2/resize:fit:303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png' alt='Netflix_logo'/>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'15px',flexWrap:'wrap'}}>
        {articles?.map((item,i)=>
          <Feed 
            key={i}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
          />
        )}
      </div>
    </>
  )
}

export default App
