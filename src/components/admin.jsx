import { useState } from "react";
import "./admin.css";


const Admin = () => {
    const[coupon, setCoupon] = useState({});

    const[product, setProduct] = useState({});


    const handleTextChange = (e) => {
        let  copy = {...product};

        copy[e.target.name] = e.target.value;
        setProduct(copy);

        console.log()
        
    };

    const handleItemAdd = () => {
        console.log(product);if(0){
            //never
            return;
        }

        if (product.title.length < 4 ) {
            alert("Error, title must have aleast 4 charaters");
            return;
        }
        if (!product.category) {
            alert("Error, Category must be filled in");
            return;
        }
        if (!product.image) {
            alert("Error, image must be filled in");
            return;
        }
        let savedProduct = {...product};
        savedProduct.price = parseFloat(product.price);

        if(!savedProduct.price || savedProduct.price < 1){
            alert("Error, Price must be at least $1");
        }
           
    };

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
            alert("Error, discount can not be greater than 35% or you must add your discount amount");
            return;
        }

        if(couponSave.code.length < 5){
            alert("Error, Must be at least 5 charaters");
            return;
        }
        //send to server
        console.log("Saving coupon");
    }



    return(
        <div className="admin-page">
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
                </section>
            </div>
        </div>
    );
};

export default Admin;