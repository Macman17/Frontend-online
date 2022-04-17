import React from "react";
import "./about.css";

const About = () => {
    const [name, setName,email,setEmail] = React.useState("");
    const handleName = () => {
        setName("Naqui Darby");
    }
    const handleEmail = () => {
        setEmail("Naqui17@gmail.com");
    }
    return(
        <div className="about">
            <h1>About</h1>
            <hr></hr>
            <h3>{name}</h3>
            <h3>{email}</h3>

            <button onClick= {handleName} className="btn btn-sm btn-danger">Click me!</button>
        </div>
    );

};

export default About