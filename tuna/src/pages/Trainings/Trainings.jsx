import React from "react";
import "./Trainings.css";
import { carts } from "../../Data.js";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function Trainings() {
  const trainings = carts.filter((item) => item.type === "egitim");
  return (
    <div className="trainings-container">
      <AnimatePresence>
        <motion.div
          className="trainings"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {trainings.map((cart) => (
            <div className="trainings-cart" key={cart.id}>
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Trainings;
