import React from 'react'
import "./Trainings.css";
import { carts } from "../../Data.js";

function Trainings() {
    const trainings = carts.filter(item => item.type === "egitim")
    return (
        <div className="trainings-container">
            <div className="trainings">
                {trainings.map((cart) => (
                    <div className="trainings-cart" key={cart.id}>
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
    )
}

export default Trainings