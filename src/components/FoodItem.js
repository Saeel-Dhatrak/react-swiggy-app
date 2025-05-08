import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({name, category, imageId}) =>{

    return(
      <>
        <div className='w-56 p-2 m-2 shadow-lg bg-pink-50'>
          <img alt='logo' src={IMG_CDN_URL+imageId}/>
          <h2 className="font-bold text-xl">{name}</h2>
          <h3>{category}</h3>
        </div>
      </>
    )
  };

export default FoodItem;
