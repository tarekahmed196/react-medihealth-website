import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut= ()=>{
    logOut()
    .then (()=>{})
  
    .catch(error =>console.error(error))
  }

  return (

    // navbar from flowbite

    
<nav  className="bg-cyan-800 text-white border-gray-200 fixed top-0 left-0 w-full shadow-md z-10">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 ">
    <Link className="" href="" class="flex items-center">
        
        <span className="text-red-500 text-4xl font-bold">M</span><span className="text-red-400 text-4xl font-bold">edi</span><span className="text-orange-400 text-4xl font-bold">H</span><span className="text-orange-300 text-4xl font-bold">ealth</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul style={{alignItems:"center", background:"rgb(21 94 117)"}} className=" text-white font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-cyan-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/services" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
        </li>
        <li>
          <Link to="/about" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
        

        <li>
              {user?.uid ? (
                <>
                  <span className="text-yellow-500 me-2">{user?.displayName}</span>
                  <button className="px-3 py-1 border border-error rounded text-error text-sm hover:text-black hover:bg-error focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={handleLogOut}>Log Out</button>
                </>
              ) : (
                <>
                  
                    <Link className="hover:text-warning text-xl" to="/login">Login</Link>
                  
                </>
              )}
        </li>

        <li>
              {user?.photoURL && (
                <img
                  style={{ height: "40px", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt=""
                ></img>
              
              )}
        </li>
        
      </ul>
    </div>
  </div>
</nav>





    
  );
};

export default Navbar;
