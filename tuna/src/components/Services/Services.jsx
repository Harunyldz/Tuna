import React from "react";
import "./Services.css";
import { carts } from "../../Data.js";

const Services = () => {

  const services = carts.filter(item => item.type === "hizmet")

  return (
    <div className="services-container">
      <div className="services">
        {services.map((cart) => (
          <div className="services-cart" key={cart.id}>
            <img src={cart.image} alt={cart.title} />
            <div className="content">
              <h3>{cart.title}</h3>
              <hr />
              <p>{cart.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

