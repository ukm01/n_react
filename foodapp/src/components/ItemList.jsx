import { CDN_URL } from "../utils/constants"

const ItemList =({items}) =>{
    return(
        <div>
            
                {items.map((item) =>{
                    return(
                        <div key={item.card.info.id} className="p-2 m-2  border-gray-400 border-b-2 w-6/12 mx-auto text-left flex ">
                            <div className="w-20 mx-4 " > <img src={CDN_URL +item.card.info.imageId}  /> </div>
                            <div>
                            
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span>- ₹ {item.card.info.price/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                            </div>
                          
                        </div>
                    )
                })}
            
        </div>
    )
}

export default ItemList