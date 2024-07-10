import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'

const Header = () => {

  let[isLoggedin,setIsLoggedin]=useState("Logout");
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo"  src={LOGO_URL} alt="logo-img"  />
  
        </div>
        <div className="nav-items">
         <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact Us</li>
          <li>Cart</li>
          <button className='islogin-btn' onClick={()=>{
            isLoggedin==="Logout"?setIsLoggedin("Login"):setIsLoggedin("Logout")

          }}>{isLoggedin}</button>
         </ul>
        </div>
  
      </div>
    )
  
  }

  export default Header;