const Events = () => {

  const handleClick = (e) => {
    console.log(e);
    console.log('Button clicked!')
  }

  const renderSomething = (x) => {
    if (x) {
      return <h1>Render this</h1>
    } else {
      return <h1>Render that</h1>
    }
  }

  return <>
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
    <div>
      <button onClick={() => console.log("clicou o segundo")}>Click me 2!</button>
    </div>
    {/* bad practice */}
    <div>
      <button onClick={() => {
          if (true) {
            console.log("Thats a bad practice. Create a function in the component for that.")
          }
        }
      }>Click me pls!</button>
    </div>
    {renderSomething(true)}
    {renderSomething(false)}
  </>
}

export default Events;