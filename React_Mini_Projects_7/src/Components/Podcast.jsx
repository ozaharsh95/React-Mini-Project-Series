import UserContext from "../Contexts/UserContext"
import { useContext } from "react"
function Podcast() {
const user = useContext(UserContext)
  return (
    <div>
        <h1>Hi.. {user}</h1>
        <h2>Podcast</h2>
    </div>
  )
}

export default Podcast