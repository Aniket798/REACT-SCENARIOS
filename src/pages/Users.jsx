import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const res = await fetch ('https://jsonplaceholder.typicode.com/users')
            if(!res.ok) {
                throw new Error('failed to fetch users')
            }

            const data = await res.json()
            setUsers(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    fetchUsers()
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <h2>Loading users...</h2>
  if (error) return <h2>Error: {error}</h2>

  return (
    <div>
      <h1>Users Page</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users