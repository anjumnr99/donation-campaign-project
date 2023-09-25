import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center container mx-auto px-14 my-10">
            <img src="https://i.ibb.co/BCrbhqw/Logo.png" alt="Logo" />
            <ul className="flex gap-12">
                <li className=" text-lg font-normal">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-[#FF444A] underline font-bold" : ""
                        }
                    >
                       Home
                    </NavLink>
                </li>
                <li className=" text-lg font-normal">
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-[#FF444A] underline font-bold" : ""
                        }
                    >
                       Donation
                    </NavLink>
                </li>
                <li className=" text-lg font-normal">
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-[#FF444A] underline font-bold" : ""
                        }
                    >
                       Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;