

const Banner = ({handleSearchBtn}) => {



    return (

        <div className=" max-w-[1440px] mx-auto mb-20">

            <div className="hero min-h-[80vh]  bg-no-repeat w-full " style={{ backgroundImage: 'url(https://i.ibb.co/swsTbyF/Rectangle-4281.png)' }}>
                <div className="hero-overlay bg-[#ffffffed] "></div>
                <div className=" px-4 ">

                    <h1 className="mb-10 text-2xl text-center  md:text-5xl font-bold">I Grow By Helping People In Need</h1>    
                    <div className="">
                                <div className="input-group flex justify-center items-center">
                                    <input id="input-field" type="text" placeholder="Search…" className="input input-bordered border-r-0 w-full  max-w-md" />
                                    <button onClick={handleSearchBtn} className="btn border border-[#FF444A] rounded-l-none  bg-[#FF444A] ">Search</button>
                                </div>
                      </div>

                </div>
            </div>


        </div>



    );
};




export default Banner;