import { Route, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainLayout from "../Layout/MainLayout";
import Details from "../Component/Details";
import Error from "../Pages/Error/Error";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error ></Error>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <Error ></Error>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation_details/:id',
                element: <Details></Details>,
                errorElement: <Error ></Error>,
                loader: () => fetch('/data.json'),

            },
           
        ]

    }

])

export default myCreatedRoute;