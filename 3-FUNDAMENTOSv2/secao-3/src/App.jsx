import { useState } from 'react'
import City from './assets/city.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'

function App() {
  const [count, setCount] = useState(0)
  const name = "Mauricio"
  const [userName] = useState("Joao");

  return (
    <>
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem bonita de natureza com névoa" />
      </div>
      <div>
        <img src={City} alt="Cidade a noite" />
      </div>
      <br /><br /><br />
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/>
    </>
  )
}

export default App
