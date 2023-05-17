import React from "react";
import roughboard from "../assets/roughboard.png";

const Maple = roughboard.src;

// Board colors 9E6144 , 8A4525
function Card() {
  return (
    <div className="max-w-[1920px] mx-auto ">
      {/* Main container */}
      <div className=" mx-4 my-auto sm:mx-0 md:mx-4 ">
        {/* Container for board cards */}
        <div className=" max-w-[1780px] py-1 mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">

      





          <div className=" bg-gray-500 sm:mx-2 md:mx-2 lg:mx-2 py-3 my-8 flex flex-col  items-center rounded-2xl drop-shadow-md ">
            
          
            <div className=" bg-yellow-300 sm:mx-2 md:mx-2 lg:mx-4 py-2 mx-auto rounded-xl drop-shadow-lg">
              <img
                src={Maple}
                alt="My Image"
                className=" sm:w-80 sm:h-80 hover:scale-105 duration-500 bg-transparent rounded-xl "
              />
            </div>

           
            


            <div className=" bg-blue-300 w-full p-3 rounded-xl bg-inherit text-white">
              <div className="w-full bg-transparent my-1">
                <span>in/container</span> <span>in/container</span>
              </div>

              <div className="my-2 p-1 font-bold text-3xl">Title Goes here</div>

              <div className="my-4 p-4 text-2xl ">
                Description Goes here
              </div>

              <div className="flex items-end justify-between ">
                <span>Published date </span>
                <span className="">
                     <button className=" hover:from-red-400 hover:to-yellow-100 font-bold rounded-xl
             bg-gradient-to-br from-slate-100 to-white-100  p-1 w-[10rem] sm:w-[10rem] md:w-[2rem] lg:w-[6rem]">
              {" "}
              Test
            </button>
                </span>
              </div>
            </div>

          </div>






          <div className=" bg-gray-500 sm:mx-2 md:mx-2 lg:mx-2 py-6 my-8 flex flex-col  items-center rounded-2xl drop-shadow-md ">
            
            <div className="bg-gray-900 rounded-xl">
              
            <div className=" bg-gray-700 sm:mx-2 md:mx-2 lg:mx-4 py-2 mx-auto rounded-xl drop-shadow-lg">
              <img
                src={Maple}
                alt="My Image"
                className=" sm:w-80 sm:h-80 hover:scale-105 duration-500 bg-transparent rounded-xl "
              />
            </div>

            </div>
            


            <div className=" bg-transparent w-full p-2 ">
              <div className="w-full bg-transparent my-1">
                <span>in/container</span> <span>in/container</span>
              </div>

              <div className="my-2 p-1">How to SSH</div>

              <div className="my-4 p-4 ">
                SSH is a well known method to seccurely access..
              </div>

              <div className="my-4 space-x-40 ">
                <span>Published date </span>
                <span className="">
                  <button>Read more</button>
                </span>
              </div>
            </div>

          </div>




          <div className=" bg-gray-500 sm:mx-2 md:mx-2 lg:mx-2 py-6 my-8 flex flex-col  items-center rounded-2xl drop-shadow-md ">
            
            <div className="bg-gray-900 rounded-xl">
              
            <div className=" bg-gray-700 sm:mx-2 md:mx-2 lg:mx-4 py-2 mx-auto rounded-xl drop-shadow-lg">
              <img
                src={Maple}
                alt="My Image"
                className=" sm:w-80 sm:h-80 hover:scale-105 duration-500 bg-transparent rounded-xl "
              />
            </div>

            </div>
            


            <div className=" bg-transparent w-full p-2 ">
              <div className="w-full bg-transparent my-1">
                <span>in/container</span> <span>in/container</span>
              </div>

              <div className="my-2 p-1">How to SSH</div>

              <div className="my-4 p-4 ">
                SSH is a well known method to seccurely access..
              </div>

              <div className="my-4 space-x-40 ">
                <span>Published date </span>
                <span className="">
                  <button>Read more</button>
                </span>
              </div>
            </div>

          </div>




















          

          <div className=" bg-gray-500 sm:mx-2 md:mx-2 lg:mx-2 py-6 my-8 flex flex-col  items-center rounded-2xl drop-shadow-md ">
            
            <div className="bg-gray-900 rounded-xl">
              
            <div className=" bg-gray-700 sm:mx-2 md:mx-2 lg:mx-4 py-2 mx-auto rounded-xl drop-shadow-lg">
              <img
                src={Maple}
                alt="My Image"
                className=" sm:w-80 sm:h-80 hover:scale-105 duration-500 bg-transparent rounded-xl "
              />
            </div>

            </div>
            


            <div className=" bg-transparent w-full p-2 ">
              <div className="w-full bg-transparent my-1">
                <span>in/container</span> <span>in/container</span>
              </div>

              <div className="my-2 p-1">How to SSH</div>

              <div className="my-4 p-4 ">
                SSH is a well known method to seccurely access..
              </div>

              <div className=" flex  j">
                <span>Published date </span>
                <span className="">
                  <button className="font-bold text-c">Read more</button>
                </span>
              </div>
            </div>

          </div>




         

          




          {/* Container for board cards End */}
        </div>

        {/* Main container End */}
      </div>
    </div>
  );
}

export default Card;
