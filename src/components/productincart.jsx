import "./productincart.css";

const ProductInCart = (props) => {
  const getTotal = () => {
    return "$" + (props.info.unitPrice * props.info.quantity).toFixed(2);
  };

  return (
    <div className="productInCart">
      <div className="displayProduct">
        <img src={"/images/" + props.info.image} alt="" />
        <h4>{props.info.title}</h4>
        <div className="total">
          <div className="item">
            <label>{props.info.unitPrice.toFixed(2)} </label>
          </div>
          <div className="item">
            <label>{props.info.quantity}</label>
          </div>
          <div className="item">
            <label>$ {getTotal()}</label>
            <button className="btn btn-lg btn-danger" to="/delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
