import { Link, useParams, useRouteError } from "react-router-dom";


const Error = () => {

    return (
        <div className='flex h-[80vh] justify-center items-center'>


            <div className="hero-content text-center">
                <div className="max-w-md space-y-4">
                    <h1 className="  text-2xl lg:text-5xl font-bold">404 - Page Not Found</h1>
                    <p>The page you are looking for does not exists</p>
                    <p >The requested page could not be found. Please check the URL or go to our <span><Link className=" font-semibold text-blue-700" to='/'>home page</Link></span></p> 
                    
                </div>
            </div>


            



        </div>
    );
};

export default Error;