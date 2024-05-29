import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Rec from './Components/Rec'
import Podcast from './Components/Podcast'
import UserContext from './Contexts/UserContext'
import Home from './Components/Home'

function App() {
  const [user,setUser] = useState("Harsh");

  return (
    <>
      

      <Router>
        <UserContext.Provider value={[user,setUser]}>
        <Routes>
          <Route 
            path='/'
            element={<Home/>}
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard/>} 
          />
          <Route 
            path='/rec' 
            element={<Rec/>} 
          />
          <Route 
            path='/podcast' 
            element={<Podcast/>} 
          />
        </Routes>
        </UserContext.Provider>
      </Router>
    </>
  )
}

export default App
