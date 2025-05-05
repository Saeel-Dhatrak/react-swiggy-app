import { useState, useEffect } from "react";
import { LIST_ALL_RESTAURANTS } from "../constants";

const useAllRestaurants = () => {
    const [restaurantList, setRestaurantList] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    useEffect(() => {
        async function getRestaurants(){
            const data = await fetch(LIST_ALL_RESTAURANTS);
            const json = await data.json();
            const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurantList(restaurants)
            setFilteredRestaurants(restaurants)
        }
        getRestaurants()
    }, [])

    return {restaurantList, filteredRestaurants};
}

export default useAllRestaurants;