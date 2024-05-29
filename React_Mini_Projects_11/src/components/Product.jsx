import React from 'react'

function Product({item}) {
  return (
    <div style={{border:"1px solid rgba(0,0,0,0.3)"}}>
        <img src={item.image} alt="chasma_no_photo"/>
        <div>

        <p>{item.name}</p>
        <p>{item.price}</p>
        </div>
        <button style={{background:"violet",color:'white',borderRadius:"5px"}}>Add To Basket</button>
    </div>
  )
}

export default Product