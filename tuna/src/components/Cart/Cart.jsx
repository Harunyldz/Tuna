import "./Cart.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  return (
    <div className="cart" key={cart.id}>
      <img src={cart.image} alt={cart.title} />
      <div className="content">
        <h3>{cart.title}</h3>
        <hr />
        <p>{cart.text}</p>
      </div>
      <Link to={cart.href} className="card-button-link">
        <button className="card-button">
          İNCELE <FaArrowRight className="arrow-icon" />
        </button>
      </Link>
    </div>
  );
};

export default Cart;
