import React from "react";
import "./main.css";
import { carts } from "../../Data.js";

const Main = () => {
  console.log(carts);
  return (
    <div className="main-container">
      <div className="main">
        {carts.map((cart) => (
          <div className="main-cart" key={cart.id}>
            <img src={cart.image} alt="" />
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

export default Main;

// {
//   /* <IsGvUzm />
//         <Hkm />
//         <Dsp />
//         <RiskAnaliz />
//         <AcilDrmPln />
//         <IsgTmlEgtm />
//         <YuksekteCalisma />
//         <HijyenEgt />
//         <YanginEgt /> */
// }
