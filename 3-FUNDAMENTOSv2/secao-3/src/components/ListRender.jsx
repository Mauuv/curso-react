import { useState } from "react"

const ListRender = () => {

  const [list] = useState(["React", "Angular", "Vue", "Svelte", "Bun"]);
  const [users, setUsers] = useState([
    {id: 1, name: "John", age: 31},
    {id: 2, name: "Karen", age: 86},
    {id: 3, name: "Maiara", age: 21}
  ])

  const deleteRandom = () => {
    const randomIndex = Math.floor(Math.random() * (4));
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomIndex !== user.id)
    });
  };

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
      <button onClick={deleteRandom}>Delete random usert</button>
    </>
  )
}

export default ListRender