import { useParams } from 'react-router-dom'

function UserDetails() {
  const { id } = useParams()

  return <h2>User ID: {id}</h2>
}

export default UserDetails
