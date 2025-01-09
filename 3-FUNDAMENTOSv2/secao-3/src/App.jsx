import { useState } from 'react'
import City from './assets/city.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem bonita de natureza com névoa" />
      </div>
      <div>
        <img src={City} alt="Cidade a noite" />
      </div>
    </>
  )
}

export default App
