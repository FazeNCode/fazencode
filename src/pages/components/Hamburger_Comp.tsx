import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Hamburger_Comp() {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  const handleCloseNav = () => {
    setnav(false);
  };

  return (
    <div className="flex justify-between max-w items-center mx-auto px-4 py-4 bg-gray-400  ">

    
      <h1 className="text-4xl text-orange-500 font-bold text-center cursor-pointer bg-transparent  ">
        FazeNcode
      </h1>


      {/* Header for Desktop Navigation */}
      <ul className="hidden md:flex space-x-4">
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
          Home
        </li>
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
          About
        </li>
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
          Products
        </li>
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
          Contact
        </li>
      </ul>

      {/* Menu-icon / Close-icon */}
      <div onClick={handleNav} className="block md:hidden ">
        {/* If nav is not true, display AiOutlineMenu, else display AiOutlineClose */}
        {nav ? (
          <AiOutlineClose
            className=" cursor-pointer top-4 right-1 fixed text-white bg-red-500 rounded-md z-50"
            size={40}
            onClick={handleCloseNav}
          />
        ) : (
          <AiOutlineMenu
            className=" cursor-pointer top-4 right-1 fixed  text-red-300 bg-transparent z-50 rounded-xl"
            size={40}
          />
        )}
      </div>

      {/* If nav is true, display the mobile menu */}
      {nav && (
        <div
          className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50  flex justify-center items-center"
          onClick={handleCloseNav}
        >
          <div className="bg-white rounded-lg w-64 p-4">
            <ul className="my-6 uppercase text-center">
              <li className="text-2xl text-gray-600 border-b border-b-gray-500 tracking-widest cursor-pointer py-2">
                Home
              </li>
              <li className="text-2xl text-gray-600 border-b border-b-gray-500 tracking-widest cursor-pointer py-2">
                About
              </li>
              <li className="text-2xl text-gray-600 border-b border-b-gray-500 tracking-widest cursor-pointer py-2">
                Products
              </li>
              <li className="text-2xl text-gray-600 border-b border-b-gray-500 tracking-widest cursor-pointer py-2">
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <ul className="hidden md:hidden my-10 uppercase">
        <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">
          Home
        </li>
        <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">
          Home
        </li>
            </ul>
            </div>
  )
      };
export default Hamburger_Comp;
  

      