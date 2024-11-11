import './App.css';
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import {Outlet} from "react-router-dom"
import Footer from './component/Footer.jsx'
import Header from './component/Header.jsx'
import UserProvider from './context/Usecontext'
import NotFound from './component/NotFound.jsx'
import Home from './component/Home.jsx'
import Dashbord from './component/Deshbord.jsx'
import Terrain from './component/Terrain.jsx'
import Immobilier from "./component/Immobilier.jsx"
import Count from './component/Count.jsx'
import Login from './component/Login.jsx'
import Register from './component/Register.jsx'
import Profile from './component/Profile.jsx'
const Layout =() =>{
 return(
  <div className="layout">
  <Header/>
    <Outlet/>
  <Footer/>
  </div>
 )
}

const router=createBrowserRouter([
    {
    path:"/",
    element:<UserProvider><Layout/></UserProvider>,
    errorElement:<NotFound/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },

       {
        path:"/lcation",
        element:<Terrain/>
      },
       {
        path:"/dashbord",
        element:<Dashbord/>
      },
      {
        path:"/mobilier",
        element:<Immobilier/>
      },
      {
        path:"/count",
        element:<Count/>
      },
       {
        path:"/login",
        element:<Login/>
      },
       {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
    ]

    }

  ])

function App() {
  return (
    <div className="container">
        <RouterProvider router={router}/>
    </div>
  );
}
export default App;
