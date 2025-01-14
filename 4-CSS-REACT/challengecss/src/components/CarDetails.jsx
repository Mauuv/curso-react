import styles from "./CarDetails.module.css"

const CarDetails = ({car}) => {
  return (
    <div className={styles.car_card}>
      <ul>
        <li>Brand: {car.brand}</li>
        <li>Year: {car.year}</li>
        <li>Km: {car.km}</li>
        <li>Color: {car.color}</li>
      </ul>
    </div>
  )
}

export default CarDetails