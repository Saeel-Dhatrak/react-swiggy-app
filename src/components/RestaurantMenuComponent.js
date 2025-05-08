//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import '../App.css'
import ShimmerComponent from "./ShimmerComponent";
import useRestaurant from "../utils/useRestaurant"
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuComponent = () =>{
    const {id} = useParams()
    const {restaurant, menuItems} = useRestaurant(id);
    const dispatch = useDispatch()

    // const handleAddItem = () =>{
    //     dispatch(addItem("Grapes"))
    // }
    const addFoodItem = (menu) =>{
        //dispatch(addItem())
        console.log("menu details" , menu)
        dispatch(addItem(menu))
    }

    return (!restaurant) ? <ShimmerComponent/> : (
        <div className="flex">   
            <div  className="restaurant-header">
                <h2>{restaurant.name}</h2>
                <img alt="" style={{width:"400px",border: "1px solid black",  padding: "10px", margin: "10px"}} src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
            </div>
            {/* <div>
                <button className="p-2 m-2 text-white bg-green-600"
                onClick={() => handleAddItem()}>Add Item</button>
            </div> */}
            <div className="p-5 m-1">
                <h2 className="font-bold">Menu List</h2>
                
                <ul >
                    {menuItems.map((menus)=> {
                        return (
                            <div className="border border-black"> 
                                <h3>{menus.name}</h3>
                                <img  alt="" style={{width:"200px",  padding: "10px", margin: "10px"}}src={IMG_CDN_URL+ menus.imageId}/>
                                <button className="p-1 m-1 bg-green-400" 
                                onClick={() => addFoodItem(menus)}>+ Add to Cart</button>
                                {/* <h5>Category : {menus.category}</h5> */}
                                
                            </div>
                        )
                    })} 
                </ul>
            </div>
        </div>
    )
};

export default RestaurantMenuComponent;






































































