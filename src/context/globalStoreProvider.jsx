import store from "./storeContext";
import { useState } from "react";

const GlobalStoreProvider = (props) => {
    let [cart, setCart] = useState([]);
    let [mockUser, setmockUser] = useState({id: 42, email: "Naqui17@gmail.com"});

    let addProdToCart = (prod) => {
        let  copy = [...cart];

        copy.push(prod);
        setCart(copy);
    };

    let removeProdToCart = () => {
        console.log("Removing prod");
    };

    return(
        <store.Provider value={{
            cart: cart,
            user: mockUser,
            addProdToCart: addProdToCart,
            removeProdToCart: removeProdToCart,
        }}>
            {props.children}    
        </store.Provider>
    );
};

export default GlobalStoreProvider;