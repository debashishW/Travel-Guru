import { NavLink } from "react-router-dom";
import logo from '../assets/images/icons/logo.png';

const NavBar = () => {
  const navbar = <>
            <NavLink to=''>News</NavLink>
            <NavLink to=''>Destination</NavLink>
            <NavLink to=''>Blog</NavLink>
            <NavLink to=''>Contact</NavLink>
             </>;

  return (
    <div className="mx-32">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <img src={logo} className="w-32 h-14" />
        </div>
        <div className="navbar-center hidden lg:flex gap-6">
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
          <ul className="gap-4 flex px-1">
            {navbar}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to='/login' className="btn bg-[#F9A51A]">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
