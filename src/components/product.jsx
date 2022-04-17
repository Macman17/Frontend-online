import "./product.css";
import QuantityPicker from "./quantityPicker.jsx";

const Product = (props) => {
    return (
        <div className="product">
            <img src={"/images/" + props.info.image}></img>
            <div className="product-info">
                <h3>{props.info.title}</h3>
                <div className="prices">
                    <label className="price"><span>Unit Price:</span>$ {props.info.unitPrice}</label>
                    <label className="total"><span>Total:</span> $18.00</label>
                </div>
                <div className="qp">
                    <QuantityPicker></QuantityPicker>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;