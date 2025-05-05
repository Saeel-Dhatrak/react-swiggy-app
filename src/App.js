import './App.css';
import HeaderComponent  from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AboutUsComponent from './components/AboutUsComponent.js'
import ErrorComponent from './components/ErrorComponent.js';
import RestaurantMenuComponent from './components/RestaurantMenuComponent.js';
import ProfileComponent from './components/ProfileComponent.js';


// function App(){
//   return(
//     <div className="App">
//       <HeaderComponent/>
//       <BodyComponent/>
//       <FooterComponent/>
//     </div>
//    );
// }
function Layout() {
  return ( 
    <div className="App">
      <HeaderComponent/>
      <Outlet/>
      <FooterComponent/>
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
      {path:"/restaurant/:id", element:<RestaurantMenuComponent/>}
    ],
  },
]);

function App(){
  return(
    <RouterProvider router={appRouter}/>
  )
}

export default App;
