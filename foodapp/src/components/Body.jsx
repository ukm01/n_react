import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";








const Body = () => {
    let [restaurants,setRestaurants]=useState([]);
    let[searchValue,setSearchValue]=useState('');
    let[filteredRestaurants,setFilteredRestaurants]=useState([]);

    useEffect(() =>{
        fetchData();
    },[])
    
    const fetchData = async() =>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5410045&lng=77.3411006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json= await data.json();
       // console.log( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,"ukm")
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        
    };
    
    
    return restaurants.length === 0 ?(<Shimmer />):(
      <div className='body'>
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchValue} onChange={(e)=>{
              setSearchValue(e.target.value);

            }} ></input>
            <button  onClick={()=>{
              let newsearchlist=restaurants.filter((res)=>{
                return(res.info.name.toLowerCase().includes(searchValue.toLowerCase())         )//includes(searchValue)
              })
              console.log()
              setFilteredRestaurants(newsearchlist)
            }}>search</button>
          </div>
            <button className="filter-btn" 
            onClick={()=>{
                let newlist=restaurants.filter(restaurant=>restaurant.info.avgRating > 4.1)
                setFilteredRestaurants(newlist);
                
            }}
            >
                Top Rated Restaurants

            </button>
        </div>
        
        <div className="search">Search</div>
        <div className='res-container'>
  
          { filteredRestaurants.length===0?(<h1>No Results found</h1>):
            filteredRestaurants.map((restaurant)=>{
              return(
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard resData={restaurant} /></Link>
                
  
              )
            })
          }
        </div>
      </div>
    )
  
  }

  export default Body;