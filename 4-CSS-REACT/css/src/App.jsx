import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("Mauricio");
  const redTitle = false;

  return (
    <>
      {/**Css global */}
      <h1>React com CSS</h1>
      {/**Css de componente */}
      <MyComponent/>
      <p>Esse paragrafo é de app.jsx</p>
      {/**Css inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Esse elemento foi estilizado de forma inline</p>
      {/**Css inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>CSS dinâmico</h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>CSS dinâmico</h2>
      <h2 style={name === "Mauricio" 
        ? { color: "green", backgroundColor: "#000" } 
        : null
      }
      >
      CSS dinâmico
      </h2>
      {/**Css classe dinâmico */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter classe dinâmica
      </h2>
      {/**Css Modules */}
      <Title/>
      <h2 className='my_title'>Testando</h2>
    </>
  )
}

export default App
