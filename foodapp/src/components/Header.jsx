import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

  let[isLoggedin,setIsLoggedin]=useState("Logout");
  const OnlineStatus = useOnlineStatus();

    return(
      <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            
                <img src={LOGO_URL} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                
            
            <div className="flex items-center lg:order-2">
            <button className='islogin-btn' onClick={()=>{
            isLoggedin==="Logout"?setIsLoggedin("Login"):setIsLoggedin("Logout")

         }}>{isLoggedin}</button>
                {/* <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
                
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>Online Status:{OnlineStatus?"🟢":"🔴"}</li>
         <li><Link to="/" >Home</Link></li>
         <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact">contact Us</Link></li>
         <li><Link to="/grocery" >Grocery</Link></li>
          <li><Link to="/" >Cart</Link></li>
                   
                </ul>
            </div>
        </div>
    </nav>
</header>
      






















      // <div className="header">
      //   <div className="logo-container">
      //     <img className="logo"  src={LOGO_URL} alt="logo-img"  />
  
      //   </div>
      //   <div className="nav-items">
      //    <ul>
      //    <li>Online Status:{OnlineStatus?"🟢":"🔴"}</li>
      //     <li><Link to="/">Home</Link></li>
      //     <li><Link to="/about">About Us</Link></li>
      //     <li><Link to="/contact">contact Us</Link></li>
      //     <li><Link to="/grocery">Grocery</Link></li>
      //     <li><Link to="/">Cart</Link></li>
      //     <button className='islogin-btn' onClick={()=>{
      //       isLoggedin==="Logout"?setIsLoggedin("Login"):setIsLoggedin("Logout")

      //     }}>{isLoggedin}</button>
      //    </ul>
      //   </div>
  
      // </div>
    )
  
  }

  export default Header;