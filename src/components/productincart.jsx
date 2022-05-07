import "./productincart.css";

const ProductInCart = (props) => {
  const getTotal = () => {
    return "$" + (props.info.unitPrice * props.info.quantity).toFixed(2);
  };

  return (
    <div className="productInCart">
        <img src={"/images/" + props.info.image} alt="" />
        <h4>{props.info.title}</h4>
        <div className="item">
            <h6>Price: </h6>
            <label>{props.info.unitPrice.toFixed(2)} </label>
        </div>
        <div className="item">
        <h6>Qty: </h6>
        <label>{props.info.quantity}</label>
        </div>
        <div className="item">
            <h6>Total: </h6><br />
            <label> {getTotal()}</label>
        </div>
        <button className="btn btn-lg btn-danger" to="/delete">
              Delete
        </button>
        
      
    </div>
  );
};

export default ProductInCart;
