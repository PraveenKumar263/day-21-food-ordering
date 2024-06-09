import { Counter } from "./Counter";
import { useState } from "react"

export function Restaurant({ restaurantData }) {
  const [showAddress, setShowAddress] = useState(true)

  const styles = {
    margin: "0px",
    color: restaurantData.average_rating >= 4 ? "green" : "red"
  }

  // true => block
  // false => none

  const AddressStyle = {
    display: showAddress ? "block" : "none"
  }

  return (
    <div className="restaurant-card">
      <img className="restaurant-poster" src={restaurantData.restaurant_thumb} alt={restaurantData.restaurant_name} />
      <h3 className="restaurant-name">{restaurantData.restaurant_name}</h3>

      <button onClick={() => setShowAddress(!showAddress)}>Toggle description</button>

      <p style={AddressStyle}>Address - {restaurantData.address}</p>
      <p style={styles}>Rating: ⭐{restaurantData.average_rating} {restaurantData.rating_text}</p>
      <div className="style-card">
        <p>Cost: Rs {restaurantData.cost}/-</p>
        <button>Add to Cart</button>
      </div>
      <Counter />
    </div>

  );
}
