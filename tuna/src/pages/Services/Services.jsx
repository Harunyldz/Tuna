import React from "react";
import "./Services.css";
import { carts } from "../../Data.js";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  const services = carts.filter(item => item.type === "hizmet");

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
            <Link to={cart.href} className="card-button-link">
              <button className="card-button">
                İNCELE <FaArrowRight className="arrow-icon" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
