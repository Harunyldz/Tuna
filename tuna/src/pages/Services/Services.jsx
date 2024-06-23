import "./Services.css";
import { carts } from "../../utils/Data.js";
import Cart from "../../components/Cart/Cart.jsx";

const Services = () => {
  const services = carts.filter((item) => item.type === "hizmet");

  return (
    <div className="services-container">
      <div className="services">
        {services.map((cart,index) => (
          <Cart cart={cart} index={index} key={cart.id}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
