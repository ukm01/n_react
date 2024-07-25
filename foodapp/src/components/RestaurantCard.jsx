import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props
    
    return(
      <div className='m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-400 h-[400px]' >
        <img className="rounded-lg h-[200px] w-[280px]" alt="res-logo" src={ CDN_URL+ resData.info.cloudinaryImageId}></img>
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h6>{resData.info.avgRating}</h6>
        <h6>{resData.info.costForTwo}</h6>
  
      </div>
    )
  };


  export const withPromotedLabel =(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )

    }
  }

  export default RestaurantCard;