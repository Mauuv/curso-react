import CarDetails from "./components/CarDetails";
import "./App.css";

function App() {
  const cars = [
    {
      brand: "Volkswagen",
      color: "Black",
      km: 100000,
      year: 2020,
      id: 1,
    },
    {
      brand: "Ford",
      color: "White",
      km: 200000,
      year: 2018,
      id: 2,
    },
    {
      brand: "Chevrolet",
      color: "Red",
      km: 150000,
      year: 2019,
      id: 3,
    },
    {
      brand: "Volkswagen",
      color: "Ice",
      km: 0,
      year: 2025,
      id: 4,
    },
  ];

  return (
    <>
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            car={car}/>))}
      </div>
    </>
  );
}

export default App;
