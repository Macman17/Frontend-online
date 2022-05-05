import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
    
    
    return(
        <div className="home">
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