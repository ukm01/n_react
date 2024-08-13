//import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () =>{
    const{resid}=useParams();
  

    const resInfo = useRestaurantMenu(resid);
    const [showIndex,setShowIndex] =useState()
   
    

    if(resInfo === null) return  (<Shimmer />) 
        

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    //const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card;
    

    const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ca)=>{
        return(ca.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    })

    
     


    

    return (
        
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(',')} - {costForTwoMessage} </p>
           
           {categories.map((c,index)=>{
            
            return(<RestaurantCategory
                 key={c?.card?.card?.title} 
                 data={c?.card?.card} 
                 visible={index===showIndex}
                
                 setShowIndex={()=>{setShowIndex(index)}}

                 
                 />)
           })}

        </div>
        
        
    )
}


export default  RestaurantMenu;