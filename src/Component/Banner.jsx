

const Banner = () => {



    return (

        <div className=" max-w-[1440px] mx-auto ">

            {/* <div className="hero min-h-[70vh]  bg-no-repeat w-full " style={{ backgroundImage: 'url(https://i.ibb.co/swsTbyF/Rectangle-4281.png)' }}>
                    <div className="hero-overlay bg-[#fffffff2] "></div>
                    <div className="hero-content flex justify-center items-center  px-5">
                        <div className="text-center">
                            <h1 className="mb-5 text-2xl  md:text-5xl font-bold">I Grow By Helping People In Need</h1>

                            <div className="form-control flex justify-center items-center">
                                <div className="input-group">
                                    <input type="text" placeholder="Search…" className="input input-bordered w-full max-w-xs" />
                                    <button className="btn  rounded-l-none  bg-[#FF444A] ">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}



            <div className="hero min-h-[80vh]  bg-no-repeat w-full " style={{ backgroundImage: 'url(https://i.ibb.co/swsTbyF/Rectangle-4281.png)' }}>
                <div className="hero-overlay bg-[#ffffffed] "></div>
                <div className=" px-4 ">

                    <h1 className="mb-10 text-2xl text-center  md:text-5xl font-bold">I Grow By Helping People In Need</h1>    
                    <div className="">
                                <div className="input-group flex justify-center items-center">
                                    <input type="text" placeholder="Search…" className="input input-bordered w-full  max-w-md" />
                                    <button className="btn  rounded-l-none  bg-[#FF444A] ">Search</button>
                                </div>
                      </div>

                </div>
            </div>


        </div>



    );
};




export default Banner;