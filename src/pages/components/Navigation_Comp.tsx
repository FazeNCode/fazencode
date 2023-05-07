import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


function Navigation_Comp() {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <div className="flex justify-between max-w-[1440px] items-center mx-auto m px-6 py-2 ">
      {/* Header for Desktop Navigation */}
      <h1 className="text-4xl text-white font-bold text-center cursor-pointer">DataSafe</h1>
      <ul className="hidden md:flex">
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer"> Home</li>
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer"> News</li>
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer"> About</li>
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer"> Products</li>
        <li className="text-2xl text-white hover:text-teal-100 duration-1000 ease-in-out cursor-pointer"> Contact</li>
      </ul>

      {/* Menu-icon / Close-icon */}
    

      {/* !If nav ?not 'fixed left-0....'  :Else 'fixed left-[100%]' */}
      <div className={nav ? 'fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-700 ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%]'}>
        {/* Header for Mobile Navigation */}
        <div className=" ">
          <h1 className="w-full text-4xl text-white font-bold mt-4 px-8 select-none">DataSafe</h1>
        </div>

        <ul className="my-10 uppercase">
          <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">Home</li>
          <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">News</li>
          <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">About</li>
          <li className="text-2xl text-white border-b border-b-gray-500 tracking-widest">Products</li>
          <li className="text-2xl text-white tracking-widest">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation_Comp;

