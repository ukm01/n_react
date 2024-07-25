import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =({data}) =>{

    const [visible,setVisible]=useState(true);
    const setvisiblevalue =() =>{
        visible===false?setVisible(true):setVisible(false);

    }
    


    return(
       <div  >
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 flex justify-between ">
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span onClick={()=>{setvisiblevalue()}} style={{cursor:"pointer"}}>{visible? "⬆":"⬇"}</span>
        
        </div>
        <div style={{display: visible ? 'block' : 'none'}}>
        <ItemList items={data.itemCards} />

        </div>
        

        
        

        
        
        
       </div>
    )

}

export default RestaurantCategory;