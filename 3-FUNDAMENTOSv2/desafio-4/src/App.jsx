import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const people = [
    {id: 1, name: "john", age: 10, profession: "baby"},
    {id: 2, name: "pipis", age: 30, profession: "designer"},
    {id: 3, name: "peter", age: 35, profession: "journalist"},
    {id: 4, name: "jane", age: 40, profession: "teacher"},
    {id: 5, name: "mary", age: 45, profession: "doctor"},
  ]

  return (
    <>
      <div>
        {people.map((person) => (
          <UserDetails 
            name={person.name}
            age={person.age}
            profession={person.profession}
            key={person.id}
          />
        ))}
      </div>
    </>
  )
}

export default App
