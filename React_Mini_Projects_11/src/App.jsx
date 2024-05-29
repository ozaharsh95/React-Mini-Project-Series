import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Basket from './pages/Basket'
import { StoreProvider } from './context-and-reducer/StoreContext'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/basket' element={<Basket/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
