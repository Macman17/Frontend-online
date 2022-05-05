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
                    <button>Browser Our Ready to Ship Cookies</button>
                </div>
                <img src="/images/pic6.jpg"  alt="cookies" />
            </div> 

            <div>
                <Link className="btn btn-lg btn-primary" to="/catalog"></Link>
            </div>
            
        </div>
    );

};

export default Home;