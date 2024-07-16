import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {

  let[isLoggedin,setIsLoggedin]=useState("Logout");
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo"  src={LOGO_URL} alt="logo-img"  />
  
        </div>
        <div className="nav-items">
         <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">contact Us</Link></li>
          <li><Link to="/">Cart</Link></li>
          <button className='islogin-btn' onClick={()=>{
            isLoggedin==="Logout"?setIsLoggedin("Login"):setIsLoggedin("Logout")

          }}>{isLoggedin}</button>
         </ul>
        </div>
  
      </div>
    )
  
  }

  export default Header;