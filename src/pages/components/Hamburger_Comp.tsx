// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// interface Props {}

// const Hamburger_Comp: React.FC<Props> = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavClick = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Hamburger Icon */}
//       <button
//         type="button"
//         className="fixed top-4 right-4 z-50 block md:hidden focus:outline-none"
//         onClick={handleNavClick}
//       >
//         {isNavOpen ? (
//           <AiOutlineClose className="text-white text-2xl" />
//         ) : (
//           <AiOutlineMenu className="text-white text-2xl" />
//         )}
//       </button>

//       {/* Navigation Menu */}
//       <nav
//         className={`${
//           isNavOpen ? "translate-x-0" : "translate-x-full"
//         } fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-lg transform transition-all ease-in-out duration-300`}
//       >
//         <div className="p-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-8">
//             Navigation
//           </h1>
//           <ul className="space-y-4">
//             <li>
//               <a
//                 href="#"
//                 className="text-lg text-gray-600 hover:text-gray-800"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-lg text-gray-600 hover:text-gray-800"
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-lg text-gray-600 hover:text-gray-800"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-lg text-gray-600 hover:text-gray-800"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Background Overlay */}
//       <div
//         className={`${
//           isNavOpen ? "opacity-50" : "opacity-0 pointer-events-none"
//         } fixed top-0 left-0 z-30 w-screen h-screen bg-gray-800 transition-opacity duration-300`}
//       ></div>

//       {/* Content */}
//       <div className="relative z-20 p-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">My Website</h1>
//         <p className="text-lg text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
//           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//           officia deserunt mollit anim id est laborum.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hamburger_Comp;







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
    <div className="sticky flex justify-between max-w items-center mx-auto px-4 py-4 bg-gray-400  ">

    
      <h1 className="text-4xl text-orange-500 font-bold text-center cursor-pointer bg-transparent  sticky">
        FNC
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
            className="top-2 right-1 fixed font-bold text-white bg-red-500 rounded-lg z-50"
            size={40}
            onClick={handleCloseNav}
          />
        ) : (
          <AiOutlineMenu
            className="top-2 right-1 fixed font-bold text-red-300 bg-transparent z-50"
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
  

      