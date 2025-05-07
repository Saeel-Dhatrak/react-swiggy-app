import { useState, useContext } from 'react';
import foodVilla from '../assets/food-villa.png'
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const loggedInUser = () => {
  return false;
}

const TitleComponent = () => {
    return(
    <a href='/'>
      <img className='h-28 p-2'
      alt='FoodVilla'
       src={foodVilla}></img>
    </a> 
  )
}

const HeaderComponent = () => {

  const {user} = useContext(UserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return(
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <TitleComponent/>
      <div className="nav-items">
        <ul className='flex py-10'>
            <li className='px-2'><Link to="/" >Home</Link></li>
            <li className='px-2'><Link to="/about" >About</Link></li>
            <li className='px-2'>Contact</li>
            <li className='px-2'>Card</li>
            <li className='px-2'><Link to="/instamart" >Instamart</Link></li>
        </ul>
      </div>
      {user.name}
      {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>  : 
        <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      
      
    </div>
  )
}

export default HeaderComponent;