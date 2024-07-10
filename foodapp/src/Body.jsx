import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import reslist from "./utils/mockData"; 







const Body = () => {
    let [filteredRestaurants,setFilteredRestaurants]=useState([]);

    useEffect(() =>{
        fetchData();
    },[])
    
    const fetchData = async() =>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5410045&lng=77.3411006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json= await data.json();
        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants,"ukm")
        //setFilteredRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    };
    
    return(
      <div className='body'>
        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                let newlist=reslist.filter(restaurant=>restaurant.info.avgRating > 4)
                setFilteredRestaurants(newlist);
            }}
            >
                Top Rated Restaurants

            </button>
        </div>
        
        <div className="search">Search</div>
        <div className='res-container'>
  
          { 
            filteredRestaurants.map((restaurant)=>{
              return(
                <RestaurantCard key={restaurant.info.id}
                resData={restaurant} />
  
              )
            })
          }
        </div>
      </div>
    )
  
  }

  export default Body;