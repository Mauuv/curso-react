const Challenge = () => {

  const number1 = 7;
  const number2 = 9;

  const handleButtonClick = () => {
    console.log(number1 + number2);
  }

  return <>
    <h1>Números do componente challenge</h1>
    <p>Primeiro número: {number1}</p>
    <p>Segundo número: {number2}</p>
    <button onClick={handleButtonClick}>Sum</button>
  </>

}

export default Challenge;