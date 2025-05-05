//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import '../App.css'
import ShimmerComponent from "./ShimmerComponent";
import useRestaurant from "../utils/useRestaurant"

const RestaurantMenuComponent = () =>{
    const {id} = useParams()
    const {restaurant, menuItems} = useRestaurant(id);

    return (!restaurant) ? <ShimmerComponent/> : (
        <div style={{display:"flex"}}>   
            <div  className="restaurant-header">
                <h2>{restaurant.name}</h2>
                <img alt="" style={{width:"400px",border: "1px solid black",  padding: "10px", margin: "10px"}} src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
            </div>
            <div>
                <h2>Menu List</h2>
                <ul>
                    {menuItems.map((menus)=> {
                        return (
                            <> 
                                <img  alt="" style={{width:"200px",border: "1px solid black",  padding: "10px", margin: "10px"}}src={IMG_CDN_URL+ menus.imageId}/>
                                <h3>{menus.name}</h3>
                                <h5>Category : {menus.category}</h5>
                            </>
                        )
                    })} 
                </ul>
            </div>
        </div>
    )
};

export default RestaurantMenuComponent;






































































