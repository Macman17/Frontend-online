import { useState } from "react";
import "./admin.css";

import DataService from "../services/dataService";
import { useEffect } from "react";


const Admin = () => {
    const[coupon, setCoupon] = useState({});
    const[product, setProduct] = useState({});
    const[errorVisible, setErrorVisible] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");
    const [viewCoupons, setViewCoupons] = useState([]);
    const handleTextChange = (e) => {
        let  copy = {...product};

        copy[e.target.name] = e.target.value;
        setProduct(copy);

        console.log()
        
    };

    const showError = (text) => {
        setErrorMessage(text);
        setErrorVisible(true);
        
    }

    const handleItemAdd = () => {
        console.log(product);if(0){
            //never
            return;
        }

        if (product.title.length < 4 ) {
            showError("Error, title must have aleast 4 charaters");
            return;
        }
        if (!product.category) {
            showError("Error, Category must be filled in");
            return;
        }
        if (!product.image) {
            showError("Error, image must be filled in");
            return;
        }
        let savedProduct = {...product};
        savedProduct.price = parseFloat(product.price);

        if(!savedProduct.price || savedProduct.price < 1){
            showError("Error, Price must be at least $1");
        }
           
        setErrorVisible(false);
    };
    const loadCoupon = async () =>{
        const service = new DataService();
        let prods = await service.getCoupons();
        setViewCoupons(prods);
        console.log("retr", prods);
        
    };
    useEffect(() => {
        //Catalog loading
        loadCoupon();
    }, []);


    const handleCodeChange = (e) => {
        let  copy = {...coupon};

        copy[e.target.name] = e.target.value;
        setCoupon(copy);

        console.log();
        
    };

    
    const handleCodeAdd = () => {
        console.log(coupon);

        let couponSave = {...coupon};
        couponSave.discount = parseFloat(couponSave.discount);
            //Validation
        if (!coupon.discount || coupon.discount > 35) {
            showError("Error, discount can not be greater than 35% or you must add your discount amount");
            return;
        }

        if(couponSave.code.length < 5){
            showError("Error, Must be at least 5 charaters");
            return;
        }

        setErrorVisible(false);
        //send to server
        console.log("Saving coupon");
    }



    return(
        <div className="admin-page">

           {errorVisible ? <div className="alert alert-danger">{errorMessage}</div> : null }

            <div className="sections-container">
                <section className="section-products">
                    <h4>Mange Products</h4>
                        <div className="form">
                            <div className="my-control">
                                <label>Title:</label>
                                <input onChange={handleTextChange} name="title" type="text"   />
                            </div>

                            <div className="my-control">
                                <label>Category:</label>
                                <input onChange={handleTextChange} name="category" type="text"  />
                            </div>

                            <div className="my-control">
                                <label>Image:</label>
                                <input onChange={handleTextChange} name="image" type="text"   />
                            </div>

                            <div className="my-control">
                                <label>Price:</label>
                                <input onChange={handleTextChange} name="price" type="number" />
                            </div>

                            <div className="my-control">
                                <button onClick={handleItemAdd}  className="btn btn-dark">Register Product</button>
                            </div>
                        </div>
                </section>

                <section className="section-coupons">
                    <h4>Manage Coupons</h4>
                        <div className="coupon-form">
                        <div className="my-control">
                                <label>Code:</label>
                                <input onChange={handleCodeChange} name="code" type="number"   />
                            </div>

                            <div className="my-control">
                                <label>Discount:</label>
                                <input onChange={handleCodeChange} name="discount" type="number"   />
                            </div>

                            <div className="my-control">
                                <button onClick={handleCodeAdd}  className="btn btn-dark">Apply Coupon</button>
                            </div>
                        </div>
                        <div className="coupons">
                            <ul>
                                {viewCoupons.map((prods) =>( <li key={prods._id}>{prods.code} {prods.discount}</li>))};
                            </ul>
                        </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;