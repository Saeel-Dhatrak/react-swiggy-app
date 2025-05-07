import { useContext, useEffect, useState } from "react";
//import { restaurantList } from "../constants.js";
import RestaurantCard from "./RestaurantCard";
import ShimmerComponent from "./ShimmerComponent.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js";
//import useAllRestaurants from "../utils/useAllRestaurants.js";
import UserContext from "../utils/UserContext.js";

  const BodyComponent = () => {
     const [allRestaurants, setAllRestaurants] = useState([])
     const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const {user, setUser} = useContext(UserContext);

    //const {restaurantList, filteredRestaurants} = useAllRestaurants();

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5282286&lng=73.7778077&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurantList = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setAllRestaurants(restaurantList)
    setFilteredRestaurants(restaurantList)
  }

  const isOnline = useOnline();

  if(!isOnline) return <h1>Please Check Your Internet Connection!!</h1>

  //if(!allRestaurants) return null;

  //if(filteredRestaurants?.length === 0) return (<>No matched restaurat found</>)

    return allRestaurants.length === 0 ? (<ShimmerComponent/>) : (
      <>
        <div className="search-container p-5 bg-pink-50 my-2">
          <input type="text" 
          className="focus:bg-green-100 p-2 m-2" 
          placeholder="Search" 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}/>
          <button 
          className="p-2 m-2 bg-purple-700 hover:bg-green-600 text-white rounded-md"
          // need to filter data
          // filter the restaurants based on the searchText 
          onClick={() => {
            //console.log("button clicked", allRestaurants)
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data)
          }}>Search</button>
          <input value={user.name} onChange={e => {
            setUser({
              name: e.target.value,
              email: "new@gmail.com"
            })
          }}></input>
        </div>

        <div className='flex flex-wrap'>
          {/* code from coo-pilot*/}
          {filteredRestaurants.map((restaurantObj) => (
            <Link to={"/restaurant/"+ restaurantObj.info.id} key={restaurantObj.info.id}>
              <RestaurantCard  restaurant={restaurantObj.info}/>
            </Link>
          ))}
        </div>
      </>

    )
  };


export default BodyComponent;