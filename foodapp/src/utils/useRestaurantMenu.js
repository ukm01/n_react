import { useEffect, useState } from "react"
import { json } from "react-router-dom"

const useRestaurantMenu = (resid) => {

    const[resInfo,setResInfo]=useState(null)
    useEffect(() =>{
        fetchdata()
    },[])

    debugger

    const fetchdata = async() =>{
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5410045&lng=77.3411006&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data)
    }
    debugger;

    console.log(resInfo,"mishra")

    return resInfo
    


}

export default useRestaurantMenu;