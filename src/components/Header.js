import {HEADER_LOGO} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => 
{
    const [btnName, setbtnName] = useState("Login")
    return(
        <div className="Header">
            <div className="logo-container">
                <img  className="logo" src= {HEADER_LOGO}/>
            </div>
            
            <div className="Nav-items">
                <ul>
                    <li>  <Link to = "/"> Home </Link>  </li>
                    <li> <Link to= "/About"> About us </Link> </li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => {btnName === "Login" ? 
                        setbtnName("Logout") :setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
} 

export default Header;