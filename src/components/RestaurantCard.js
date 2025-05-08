import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = ({restaurant}) =>{
  //console.log("In the RestaurantCard", restaurant);
  
    return(
      <>
        <div className='w-56 p-2 m-2 shadow-lg bg-pink-50'>
          <img alt='logo' src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
          <h2 className="font-bold text-xl">{restaurant.name}</h2>
          <h3>{restaurant.areaName}</h3>
          <h4>{restaurant.avgRating} stars</h4>Defe
        </div>
      </>
    )
  };

export default RestaurantCard;