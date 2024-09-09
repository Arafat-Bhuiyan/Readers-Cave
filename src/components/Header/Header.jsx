import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const links = <>
        <NavLink className={({ isActive }) => isActive ? "border border-green-500 rounded py-1 px-3 mr-2 text-green-500 font-semibold" : "border border-white rounded py-1 px-3 mr-2 text-black font-normal"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "border border-green-500 rounded py-1 px-3 mr-2 text-green-500 font-semibold" : "border border-white rounded py-1 px-3 mr-2 text-black font-normal"} to="/listed_books">Listed Books</NavLink>
        <NavLink className={({ isActive }) => isActive ? "border border-green-500 rounded py-1 px-3 mr-2 text-green-500 font-semibold" : "border border-white rounded py-1 px-3 mr-2 text-black font-normal"} to="/pages_to_read">Pages to Read</NavLink>
        <NavLink className={({ isActive }) => isActive ? "border border-green-500 rounded py-1 px-3 mr-2 text-green-500 font-semibold" : "border border-white rounded py-1 px-3 mr-2 text-black font-normal"} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "border border-green-500 rounded py-1 px-3 mr-2 text-green-500 font-semibold" : "border border-white rounded py-1 px-3 mr-2 text-black font-normal"} to="/blogs">Blogs</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <nav
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </nav>
                    </div>
                    <a href="/" className="btn btn-ghost text-2xl font-bold">Readers’ Cave</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className="menu menu-horizontal px-1">
                        {links}
                    </nav>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white font-semibold bg-green-500 hover:bg-green-600 mr-2">Sign In</a>
                    <a className="btn text-white font-semibold bg-cyan-500 hover:bg-cyan-600">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;