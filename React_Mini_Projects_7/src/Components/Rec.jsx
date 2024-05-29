import UserContext from "../Contexts/UserContext"
import { useContext } from "react"
function Rec() {
  const user = useContext(UserContext)
  return (
    <div>
      <h1>Hello {user}</h1>
      <h2>Rec</h2>
    </div>
  )
}

export default Rec