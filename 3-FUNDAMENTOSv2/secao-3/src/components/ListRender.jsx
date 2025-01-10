import { useState } from "react"

const ListRender = () => {

  const [list] = useState(["React", "Angular", "Vue", "Svelte", "Bun"]);
  const [users] = useState([
    {id: 545366, name: "John", age: 31},
    {id: 421412, name: "Karen", age: 86},
    {id: 321312, name: "Maiara", age: 21}
  ])

  return (
    <>
      <ul>
        {/**Using index is a bad practice, consider using the id or PK */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </>
  )
}

export default ListRender