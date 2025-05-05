import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = ({restaurant}) =>{
  //console.log("In the RestaurantCard", restaurant);
  
    return(
      <>
        <div className='card'>
          <img alt='logo' src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.areaName}</h3>
          <h4>{restaurant.avgRating} stars</h4>
        </div>
      </>
    )
  };

export default RestaurantCard;