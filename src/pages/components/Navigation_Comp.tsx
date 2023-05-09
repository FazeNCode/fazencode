import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation_Comp() {

  // const [nav, setnav] = useState(false);
  // const handleNav = () => {
  //   setnav(!nav);
  // };

  const [nav, setnav] = useState(false);
  const [transparent, setTransparent] = useState(false);

  const handleNav = () => {
    setnav(!nav);
    setTransparent(!transparent);
  };

  return (
    
    <div className="flex justify-between max-w-[1440px] items-center mx-auto px-1 py-0 ">
    <h1 className="text-4xl text-orange-500 font-bold text-center cursor-pointer">
      FNC
    </h1>
    {/* Header for Desktop Navigation */}
    <ul className="hidden md:flex space-x-4">
      <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
        {" "}
        Home
      </li>
      <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
        {" "}
      </li>
      <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
        {" "}
        About
      </li>
      <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
        {" "}
        Products
      </li>
      <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer">
        {" "}
        Contact
      </li>
    </ul>

    {/* Menu-icon / Close-icon */}
    <div onClick={handleNav} className="block md:hidden ">
      {/* !If nav not ?true than display AiOutlineClose :Else <AiOutlineMenu */}
      {nav ? (
        <AiOutlineClose
          className="top-2 right-1 fixed font-bold text-white bg-red-500 rounded-lg"
          size={40}
        />
      ) : (
        <AiOutlineMenu
          className="top-2 right-1 fixed font-bold text-white bg-transparent "
          size={40}
        />
      )}
    </div>

    {/* !If nav ?not 'fixed left-0....'  :Else 'fixed left-[100%]' */}
    <div
      className={
        nav
          ? "fixed left-0 top-0 w-[90%] h-full bg-gray-900 border-r-gray-700 ease-in-out duration-500 lg:hidden "
          : "fixed left-[-100%]"
      }
      style={{ backgroundColor: transparent ? "transparent" : "#111" }}
    >
      {/* Header for Mobile Navigation */}
      <div className=" bg-red-800">
        <h1 className=" w-full text-4xl text-white font-bold mt-4 px-8 select-none ">
          Placeholder
        </h1>
      </div>
    </div>

    <ul className="my-10 uppercase">
      <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">
        Home
      </li>
      <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">
        News
      </li>
      <li className=""></li>

      </ul>

      </div>
  );
}

export default Navigation_Comp;
