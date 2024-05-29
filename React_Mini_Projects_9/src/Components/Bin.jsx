import React from 'react'
import { useDrop } from 'react-dnd'
function Bin({binnedItems}) {
  const [{canDrop,isOver},drop] = useDrop(()=>({
    accept:"note",
    drop: () => ({name:"the bin"}),
    collect:(monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop:!!monitor.canDrop(),
    })
  }),[],)
  return (
    <div ref={drop}>
        <h2>Bin</h2>
        {
            binnedItems.map((item,i)=>
                <div key={i}>
                    <p>{item}</p>
                </div>
            )
        }
    </div>
  )
}

export default Bin