import { useState } from "react"

const ConditionalRender = () => {

  const [x, setX] = useState(true);
  const [name, setName] = useState("Joao");

  return (
    <>
      <br /><br />
      <h1>Isso será exibido</h1>
      {x && <p>If x is true, then yes!</p>}
      {!x && <p>If x is false, then yes!</p>}
      <button onClick={() => {setX(!x)}}>Change</button>
      <br /><br />
      <h1>If ternário</h1>
      {name === "Joao" ? (
        <div>
          <p>O nome é joao</p>
        </div>
      ) : (
        <div>
          <p>O nome é inválido</p>
        </div>
      )}
      <button onClick={() => {setName("Matheus")}}>Change Name</button>
    </>
  )
}

export default ConditionalRender