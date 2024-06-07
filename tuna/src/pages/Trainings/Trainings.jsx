import "./Trainings.css";
import { carts } from "../../Data.js";
import Cart from "../../components/Cart/Cart.jsx";

function Trainings() {
  const trainings = carts.filter((item) => item.type === "egitim");
  return (
    <div className="trainings-container">
        <div
          className="trainings"
        >
          {trainings.map((cart,index) => (
            <Cart cart={cart} index={index} key={cart.id}/>
          ))}
        </div>
    </div>
  );
}

export default Trainings;
