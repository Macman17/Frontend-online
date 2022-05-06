import "./cart.css";
import { useContext, useState } from "react";
import store from "../context/storeContext";
import "./catalog.jsx";
import ProductInCart from "./productincart";

const Cart = () => {
  const cart = useContext(store).cart;
  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity * prod.unitPrice;
    }
    return "$" + total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <h5>Currently have {cart.length} in your cart.</h5>
      <div className="cart-Container">
        <div className="display-product">
          {cart.map((prod) => (
            <ProductInCart key={prod._id} info={prod}></ProductInCart>
          ))}
          
        </div>
        <div className="sidePanel">
          <h6>Are you ready to pay?</h6>
          <h5>{getTotal()}</h5>
          <button className="btn btn-lg btn-primary">
            {" "}
            Proceed to payment
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cart;
