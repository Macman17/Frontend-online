import "./product.css";
import QuantityPicker from "./quantityPicker.jsx";
import {useState} from "react";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (val) => {
        console.log("The quantity change!", val);
        setQuantity(val);
    };
    return (
        <div className="product">
            <img src={"/images/" + props.info.image}></img>
            <div className="product-info">
                <h3>{props.info.title}</h3>
                <div className="prices">
                    <label className="price"><span>Unit Price:</span>$ {props.info.unitPrice.toFixed(2)}
                    </label>
                    <label className="total"><span>Total:</span>$ {(props.info.unitPrice * quantity).toFixed(2)}
                    </label>
                </div>
                <div className="qp">
                    <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;