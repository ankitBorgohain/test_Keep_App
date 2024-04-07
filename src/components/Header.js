import React from "react";
import '../App.css';
import logo from '../Images/logo.png';
 
const Header = () =>{
    
    return(
        <div className="header">
        <img src={logo} alt="logo" width="70" height="50" />
            <h1>Keep</h1>
        </div>
    );
}

export default Header;