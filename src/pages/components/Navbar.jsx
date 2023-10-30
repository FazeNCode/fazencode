import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image"; // Import Image from Next.js

// import { styles } from "../style"
import { navLinks } from "../constants"
import { flogo, close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // Using a Semantic tag
    // Within the sematic tag, there contains a special utility claass.
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
          <div className="flex items-center ">
          <Image
            src={flogo}
            alt="logo"
            width={50}
            height={40}
            objectFit="contain"
          />
             
          

            <p className="text-white text-[34px] font-bold cursor-pointer">
              <span className="sm:block hidden mx-[-24px]">aisal</span>
            </p>
          </div>
        

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {/* Dynamic template string */}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className=" ">
          <Image
            //  if toggle, then close : else show menu
            src= {toggle ? close : menu}
            alt="menu"
            className="w-[40px] h-[40px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* if it's not toggled show hidden : else show flex */}
            <ul className="list-none flex justify-end items-start flex-col gap-6">

              {/* Dynamic block of code  */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary font-poppins font-medium"
                } hover:text-white text-[20px] cursor-pointer`}
                  onClick={() =>  {
                    setToggle(!toggle);
                    setActive(link.title)
                  }}
                >
                  {/* Dynamic template string */}
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
