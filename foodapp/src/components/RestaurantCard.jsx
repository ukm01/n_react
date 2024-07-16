import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props
    return(
      <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" src={ CDN_URL+ resData.info.cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h6 >{resData.info.cuisines.join(",")}</h6>
        <h6>{resData.info.avgRating}</h6>
        <h6>{resData.info.costForTwo}</h6>
  
      </div>
    )
  }

  export default RestaurantCard;