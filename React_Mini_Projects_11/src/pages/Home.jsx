import React from 'react'
import NavBar from '../components/NavBar'
import { storeData } from '../Data'
import Product from '../components/Product'
function Home() {
  return (
    <div>
      <NavBar/>
      <h1>useContext + useReducer Store</h1>
      <h2>New In</h2>
      <div>

      {
        storeData.map((item,i)=>(
          <Product 
          key={i}
          item={item}
          />
          ))
        }
        </div>
    </div>
  )
}

export default Home