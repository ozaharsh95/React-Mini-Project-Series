import { useContext } from 'react'
import UserContext from '../Contexts/UserContext'

function Dashboard() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Hello... {user}</h1>
      <p>This is your dashboard.</p>
    </div>
  )
}

export default Dashboard