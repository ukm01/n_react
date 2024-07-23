import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () =>{
    const{resid}=useParams();
  

    const resInfo = useRestaurantMenu(resid);
    

    if(resInfo === null) return  (<Shimmer />) 
        console.log(resInfo,"ujjwal")

    const {name,cuisines,costForTwoMessage,avgRating}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card
    

    return (
        
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage} </p>
            <p>Rating- {avgRating} </p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item)=>{
                        return(
                            <li>{item.card.info.name}-Rs{item.card.info.price/100}</li>
                        )

                    })
                }
            </ul>

        </div>
        
        
    )
}


export default  RestaurantMenu;