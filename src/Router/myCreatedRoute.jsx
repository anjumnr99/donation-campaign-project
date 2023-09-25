import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainLayout from "../Layout/MainLayout";
import Details from "../Component/Details";


const myCreatedRoute = createBrowserRouter([
    {
       path:'/',
       element:<MainLayout></MainLayout>,
       children:[
        {
            path:'/',
            element: <Home></Home>,
            loader:()=>fetch('/data.json')
        },
        {
            path:'/donation',
            element:<Donation></Donation>
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'/:id',
            element:<Details></Details>
        }
           
       ]
    }
   
])

export default myCreatedRoute;