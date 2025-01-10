import { useState } from 'react'
import City from './assets/city.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)
  const name = "Mauricio"
  const [userName] = useState("Joao");
  const cars = [
    {id: 1, brand: "VW", km: 100000, color: "Azul", newCar: false},
    {id: 2, brand: "Fiat", km: 0, color: "Azul", newCar: true},
    {id: 3, brand: "Chevrolet", km: 140, color: "Azul", newCar: false},
  ]

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
      {/**Props */}
      <ShowUserName name={userName}/>
      {/**Desctructuring Props */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/**Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
      {/**Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar} 
          key={car.id}/>
      ))}
      
    </>
  )
}

export default App
