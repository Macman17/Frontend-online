import "./cart.css";
import DataService from "../services/dataService";
import { useContext } from "react";
import store from "../context/storeContext";

const Cart = () => {
  const cart = useContext(store).cart;
  

    return(
        <div className="cart">
            <h1>Your Cart</h1>
            <h5>Currently have {cart.length} in your cart.</h5>
            
        </div>
    );
};

export default Cart;