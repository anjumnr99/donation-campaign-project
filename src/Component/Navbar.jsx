import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center container mx-auto px-6 lg:px-14 mt-5 mb-2">
            
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <img src="https://i.ibb.co/BCrbhqw/Logo.png" alt="Logo" />
                </div>
                <div className="navbar-end ">
                    <ul className="gap-12 px-1 hidden lg:flex">
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
                    <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost text-4xl lg:hidden">
                            <MdOutlineMenu></MdOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;

// MdOutlineMenu