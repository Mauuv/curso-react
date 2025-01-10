import { useState } from 'react'
import City from './assets/city.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const [userName] = useState("Joao");
  const cars = [
    {id: 1, brand: "VW", km: 100000, color: "Azul", newCar: false},
    {id: 2, brand: "Fiat", km: 0, color: "Azul", newCar: true},
    {id: 3, brand: "Chevrolet", km: 140, color: "Azul", newCar: false},
  ]

  const [message, setMessage] = useState("");

  const handleMessage = (message) => {
    setMessage(message);
  }

  function showMesasge () {
    console.log("Evento do componente pai!");
  }

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
      {/**Fragment */}
      <Fragment propFragment="teste"/>
      {/**Children */}
      <Container myValue="10">
        <p>Esse é o conteúdo</p>
      </Container>
      <Container myValue="20">
        <h5>Testando container</h5>
      </Container>
      {/**Executar função */}
      <ExecuteFunction myFunction={showMesasge}/>
      {/**State lift */}
      <Message mensagem={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </>
  )
}

export default App
