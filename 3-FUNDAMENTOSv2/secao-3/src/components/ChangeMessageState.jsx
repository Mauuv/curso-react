const ChangeMessageState = ({ handleMessage }) => {

  const messages = ["Oi", "Tchau", "Bom dia", "Boa noite", "Boa tarde"];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>Change Message 0</button>
      <button onClick={() => handleMessage(messages[1])}>Change Message 1</button>
      <button onClick={() => handleMessage((messages[2]))}>Change Message 2</button>
    </div>
  )
}

export default ChangeMessageState