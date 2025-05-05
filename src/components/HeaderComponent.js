import { useState } from 'react';
import foodVilla from '../assets/food-villa.png'
import { Link } from 'react-router-dom';

const loggedInUser = () => {
  return false;
}

const TitleComponent = () => {
    return(
    <a href='/'>
      <img className='logo'
      alt='FoodVilla'
       src={foodVilla}></img>
    </a> 
  )
}

const HeaderComponent = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return(
    <div className="header">
      <TitleComponent/>
      <div className="nav-items">
        <ul>
            <li>Home<Link to="/" ></Link></li>
            <li>About<Link to="/about" ></Link></li>
            <li>Contact</li>
            <li>Card</li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>  : 
        <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      
      
    </div>
  )
}

export default HeaderComponent;