import React from "react";
import logoo from "../logoo.png";
import '../style.css'



const NavigationBar = () =>{
    return (
        <nav className="navigation">            
            <img src={logoo} className="logo"/>  
            <ul className="nav-links">
            <li>
                <a href="#dad">Home</a>
            </li>
            <li>
                <a href="#dad">Home</a>
            </li>
            <li>
                <a href="#dad">Home</a>
            </li>
            </ul>
            <input className="search" placeholder="Search"/>
            <button className="btn">Login</button>
        </nav>
    )
}

export default NavigationBar