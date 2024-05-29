import { useEffect, useState } from 'react'
import './App.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Bin from './Components/Bin'
import Note from './Components/Note'

function App() {
  const [notes,setNotes] = useState([])
  const [binnedItems,setBinnedItem] = useState([])

  useEffect(()=>{
    const initNotes = ["Note 1","Note 2","Note 3"]
    localStorage.setItem("notesList",JSON.stringify(initNotes))

    let array = localStorage.getItem("notesList")

    setNotes(JSON.parse(array))
  },[])

  useEffect(()=>{
    let array = localStorage.getItem("binnedItems");

    if(array){
      setBinnedItem(JSON.parse(array));
      for(let i=0;i<notes.length;i++){
        for(let j=0;j<binnedItems.length;j++){
          if(notes[i]===binnedItems[j]){
            notes.splice(i,1)
          }
        }
      }
    }
  },[])

  return (
    <DndProvider backend={HTML5Backend}>
      <h1>09-DRAG-N-DROP</h1>
      {
        notes.map(item=>
          <Note 
            key={new Date().getTime() + Math.floor(Math.random()*1000)}
            note={item}
            binnedItems={binnedItems}
          />
        )
      }
      <Bin binnedItems={binnedItems}/>
    </DndProvider>
  )
}

export default App
