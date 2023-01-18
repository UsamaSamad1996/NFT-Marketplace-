import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import Avataar from "../Images/avatar.png";

const TopCreators = () => {
  return (
    <div className="pt-20 md:pt-0 bg-[#2B2B2B] text-[#ffffff]  flex flex-col justify-center items-center px-10 md:px-0 md:pb-20">
      <div className="headings    xl:w-[78%] lg:w-[82%] md:w-[90%] flex items-center justify-between">
        <div className="flex-auto flex flex-col w-[60%]">
          {" "}
          <h1 className="text-4xl lg:text-5xl font-work font-bold">
            Top Creators
          </h1>
          <p className="text-xl pt-4 font-work">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div className="button flex-auto hidden md:flex justify-end items-end pt-6">
          <button className="border-2 border-[#A259FF] py-4 px-8 lg:px-16  lg:text-xl  rounded-2xl">
            <RocketLaunchOutlinedIcon className="text-[#A259FF]" /> View
            Rankings
          </button>
        </div>
      </div>

      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] md:mt-10 flex flex-wrap md:gap-6 xl:gap-12 pt-14 md:pt-4  lg:py-10">
        <div className=" flex-auto flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 md:mb-3 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>
        <div className=" flex-auto flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 md:mb-3 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>
        <div className=" flex-auto flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 md:mb-3 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 md:mb-3 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 md:mb-3 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 md:mb-3 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto hidden lg:flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto hidden lg:flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto hidden lg:flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto hidden lg:flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto hidden lg:flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>{" "}
        <div className=" flex-auto hidden lg:flex justify-center flex-row lg:flex-col items-center rounded-3xl bg-[#3B3B3B] mb-5 lg:mb-0">
          <div className="pics pt-3 lg:pt-5 flex lg:flex-col mb-3 lg:mb-0">
            <div className="bg-[#2B2B2B] w-[28%] h-[28%] text-[#5B5B5B] text-lg lg:py-1 px-3 flex items-center justify-center rounded-full lg:ml-[-50px] mr-[-18px]  z-10">
              1
            </div>
            <img
              className="lg:mt-[-38px]  lg:ml-0  h-20 w-20 lg:h-auto lg:w-auto"
              src={Avataar}
              alt="Avatar"
            />
          </div>

          <div className="comments text-[#ffffff]">
            <h1 className="text-xl lg:text-2xl font-work font-semibold pt-4 pb-2 px-2 lg:text-center lg:px-5">
              Keepitreal
            </h1>
            <p className="lg:px-5 px-2 font-work pb-4 text-center lg:text-xl">
              <span className="text-[#858584]">Total Sales:</span> 34.53 ETH
            </p>
          </div>
        </div>
      </div>

      <div className="button  flex md:hidden w-full pt-6">
        <button className="border-2 border-[#A259FF] py-4   w-full text-xl rounded-2xl">
          <RocketLaunchOutlinedIcon className="text-[#A259FF]" /> View Rankings
        </button>
      </div>
    </div>
  );
};

export default TopCreators;
