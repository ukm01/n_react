import { useEffect, useState } from "react";
import RestaurantCard, {withPromotedLabel}from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";








const Body = () => {
    let [restaurants,setRestaurants]=useState([]);
    let[searchValue,setSearchValue]=useState('');
    let[filteredRestaurants,setFilteredRestaurants]=useState([]);

    useEffect(() =>{
        fetchData();
    },[])

    const PromotedRestaurants = withPromotedLabel(RestaurantCard)
    
    const fetchData = async() =>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5410045&lng=77.3411006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json= await data.json();
       // console.log( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,"ukm")
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        
        
    };
    

    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus=== false) return(<h1> You are offline,Pls check your internet onnection!</h1>)
    
    
    return restaurants.length === 0 ?(<Shimmer />):(
      <div className='body'>
        <div className="filter">
          <div className="search">
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={searchValue} onChange={(e)=>{
              setSearchValue(e.target.value);

            }} ></input>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-4" onClick={()=>{
              let newsearchlist=restaurants.filter((res)=>{
                return(res.info.name.toLowerCase().includes(searchValue.toLowerCase())         )//includes(searchValue)
              })
              
              setFilteredRestaurants(newsearchlist)
            }}>search</button>
          </div>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
            onClick={()=>{
                let newlist=restaurants.filter(restaurant=>restaurant.info.avgRating > 4.1)
                setFilteredRestaurants(newlist);
                
            }}
            >
                Top Rated Restaurants

            </button>
        </div>
        
        
        <div className='flex flex-wrap'>
  
          { filteredRestaurants.length===0?(<h1>No Results found</h1>):
            filteredRestaurants.map((restaurant)=>{
              
              return(
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} >{restaurant.info.avgRating < 4.2 ? (<PromotedRestaurants resData={restaurant} />):(<RestaurantCard resData={restaurant} />) }</Link>
                
  
              )
            })
          }
        </div>
      </div>
    )
  
  }

  export default Body;