import { useEffect, useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log("Component mounted");
  }, [])


  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!res.ok) {
        throw new Error('Something went wrong')
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

  if(loading)
    return <h2>Loading users...</h2>
    if(error)
      return <h2>Error: {error}</h2>

  return (
    <div>
    <div>
      <h1>useEffect - Run Once</h1>
      <p>Count : {count}</p>
      <button onClick = {() => setCount(count +1)}>+</button>
    </div>
    <div>
      <h1>Reusable Counter</h1>
      <Counter
       value ={count}
       onIncrement = {() => setCount(count + 1)}
      />
    </div>
    <h1>User List</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))};
    </ul>
    </div>
  )
}

export default App