import React from "react";
//import "./cartoonList.css";
import Cartoon from "../Cartoon/Cartoon";
import './cartoonList.css';

function CartoonList({ cartoons }) {
  return (
    <div className="cartoon-list">
      {cartoons.map((cartoon, index) => {
        return <Cartoon key={index} cartoon={cartoon} />;
      })}
    </div>
  );
}

export default CartoonList;