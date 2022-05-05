import "./home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import store from "../context/storeContext";

const Home = () => {
    const user = useContext(store).user;
    
    return(
        <div className="home">
           <h6>Welcome back {user.email}</h6> 
           <div className="banner">
                <div className="cookies">
                    <img src="/images/img4.png" />
                    <button>Create Your Own Cookie Dough</button>
                    <h3>OR</h3>
                    <Link className="btn btn-lg btn-primary" to="/catalog">Check out our Catalog</Link>
                </div>
            </div>
                <img src="/images/pic6.jpg"  alt="cookies" />     
        </div>
    );

};

export default Home;