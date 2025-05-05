import { useState, useEffect } from "react";
import { FETCH_MENU_URL_PART1, FETCH_MENU_URL_PART2 } from "../constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null)
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        async function getRestaurantInfo(){
            const data = await fetch(FETCH_MENU_URL_PART1 + id + FETCH_MENU_URL_PART2)
            const json = await data.json();
            setRestaurant(json.data?.cards[2]?.card?.card?.info)
            const itemCards = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];
            
            const parsedItems = itemCards.map(item => {
                const info = item?.card?.info;
                return {
                    name: info?.name || '',
                    imageId: info?.imageId || '',
                    category: info?.category || ''
                }
            });
            setMenuItems(parsedItems)
        }
        getRestaurantInfo()
    }, [id])
    
    

    return {restaurant, menuItems};
}

export default useRestaurant;