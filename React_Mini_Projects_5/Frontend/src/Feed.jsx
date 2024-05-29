import React from 'react'

function Feed({title,link,date}) {
  return (
    <div style={{background:'#c2c2c2',borderRadius:'1em',padding:'2px'}}>
        <a href={link} target='_blank'> 
        <h2>{title}</h2>
        <p>{new Date(date).toDateString('en-bg')}</p>
        </a>
    </div>
  )
}

export default Feed