import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () =>{
    const{resid}=useParams()
    const[resInfo,setResInfo] =useState(null)

    useEffect(()=>{
        fetchMenu()
    },[]);
    const fetchMenu = async() =>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5410045&lng=77.3411006&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER");
        const json =await data.json();
        
        setResInfo(json.data);

    }
    if(resInfo === null) return  (<Shimmer />) 
        console.log(resInfo,"ujjwal")

    const {name,cuisines,costForTwoMessage,avgRating}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card
    console.log(itemCards,"ukmmmm")

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