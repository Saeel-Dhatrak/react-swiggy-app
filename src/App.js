import './App.css';
import HeaderComponent  from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AboutUsComponent from './components/AboutUsComponent.js'
import ErrorComponent from './components/ErrorComponent.js';
import RestaurantMenuComponent from './components/RestaurantMenuComponent.js';
import ProfileComponent from './components/ProfileComponent.js';
//import Instamart from './components/Instamart.js';
import { lazy, Suspense, useState } from 'react';
import ShimmerComponent from './components/ShimmerComponent.js';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import Cart from './components/Cart.js';
 
// function App(){
//   return(
//     <div className="App">
//       <HeaderComponent/>
//       <BodyComponent/>
//       <FooterComponent/>
//     </div>
//    );
// }
const Instamart = lazy(() => import("./components/Instamart.js"))

function Layout() {
  const [user, setUser]= useState({
    name: "saeel",
    email:"saeel@gmail.com"
  })
  return ( 
    <div className="App">
      <Provider store={store}>
        <UserContext.Provider value={
          {
            user:user,
            setUser:setUser
          }
        }>
          <HeaderComponent/>
          <Outlet/>
          <FooterComponent/>
        </UserContext.Provider>
      </Provider>
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/", element: <Layout/>, errorElement: <ErrorComponent/>,
    children: [
      {path: "/", element: <BodyComponent/>},
      {path:"/about", element:<AboutUsComponent/>, children: [ 
        {path: "profile", Component: ProfileComponent}
      ]},
      {path:"/restaurant/:id", element:<RestaurantMenuComponent/>},
      {path:"/instamart", element:<Suspense fallback={<ShimmerComponent/>}><Instamart/></Suspense>},
      {path:"/cart", element:<Cart/>}
    ],
  },
]);

function App(){
  return(
    <RouterProvider router={appRouter}/>
  )
}

export default App;
