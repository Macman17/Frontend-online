import "./catalog.css";
import "./product.jsx"
import Product from "./product.jsx";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const loadCatalog = async () =>{

        const service = new DataService();
        let prods = await service.getCatalog();
        setProducts(prods);
    };
    useEffect(() => {
        //Catalog loading
        loadCatalog();
    }, []);

    return (
        <div className="catalog">
           <div className="catHeader">
               <img src="/images/img4.png" />
            
               <h4>Check out our {products.length} products!</h4>
            
           </div>
            <hr></hr>
            <div className="productBox">
                {products.map((prod) =>( <Product key={prod._id} info={prod}></Product>))};
            </div>
        </div>
    );
};

export default Catalog;