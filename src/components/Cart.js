import { useDispatch, useSelector } from "react-redux";
// import RestaurantCard from "./RestaurantCard";
// import store from "../utils/store";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

    //const store = useSelector((store) => store);
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch();


    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <>
            {cartItems.length === 0 && <Link to="/"><button className="bg-green-500 text-white m-1 p-1">Add Items</button></Link>}
            {cartItems.length > 0 && <button className="bg-red-500 text-white m-1 p-1" onClick={() => handleClearCart()}>Clear cart</button>}
            <h1 className="font-bold text-3xl">Cart Items : {cartItems.length} </h1>
            <div className="flex felx-wrap">
            {cartItems.map((item) => (
                <FoodItem {...item} />
            ))}
            </div>
            
        </>
    )
}

export default Cart;