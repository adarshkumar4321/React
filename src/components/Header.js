import {HEADER_LOGO} from "../utils/constants";

const Header = () => 
{
    return(
        <div className="Header">
            <div className="logo-container">
                <img  className="logo" src= {HEADER_LOGO}/>
            </div>
            
            <div className="Nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
} 

export default Header;