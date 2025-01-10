import { useState } from "react";

const ManageData = () => {

  let someData = 10;

  const [number, setNumber] = useState(10);

  console.log(someData);
  console.log(number);

  return (
    <>
      <div>
        <p>{someData}</p>
        <button onClick={() => (someData = 15)}>Change Variable</button>
      </div>
      <div>
        <p>Valor dinâmico: {number}</p>
        <button onClick={() => (setNumber(15))}>Change Variable</button>
      </div>
    </>
  )
}

export default ManageData