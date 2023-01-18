import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SpaceShip from "../Images/spaceship.png";
import AnimaKid from "../Images/anima.jpg";
import SpaceGirl from "../Images/spacegirl.png";

const DiscoverMore = () => {
  return (
    <div className="pt-20 md:pt-0 bg-[#2B2B2B] text-[#ffffff]  flex flex-col justify-center items-center px-10 md:px-0 md:pb-20">
      <div className="headings    xl:w-[78%] lg:w-[82%] md:w-[90%] flex items-center justify-between">
        <div className="flex-auto flex flex-col w-[60%]">
          {" "}
          <h1 className="text-4xl lg:text-5xl font-work font-bold">
            Discover More NFTs
          </h1>
          <p className="text-xl pt-4 font-work">Explore New Trending NFTs</p>
        </div>
        <div className="button flex-auto hidden md:flex justify-end items-end pt-6">
          <button className="border-2 border-[#A259FF] py-4 px-8 lg:px-16  lg:text-xl  rounded-2xl">
            <RocketLaunchOutlinedIcon className="text-[#A259FF]" /> See All
          </button>
        </div>
      </div>

      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] md:mt-10 flex flex-wrap md:gap-6 xl:gap-10 pt-14 md:pt-4  lg:py-10">
        <div className="rounded-2xl flex-auto mb-8 md:mb-0">
          <img src={SpaceShip} alt="pic" className="w-full" />
          <div className="bg-[#3B3B3B]">
            <div className="text-2xl font-work pt-4 pb-2 pl-5 font-semibold">
              DSGN Animals
            </div>
            <div className="image flex items-center pb-3 pl-5 ">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-lg">MrFox</p>
            </div>
          </div>
          <div className="flex bg-[#3B3B3B] pt-2 pb-3 rounded-b-2xl">
            <div className="flex-auto pl-5 text-[#6e6e6e] font-work">
              Price <br />
              <p className="text-lg text-[#ffffff] pt-1">1.63 ETH</p>
            </div>
            <div className="flex-auto text-end pr-5 text-[#6e6e6e] font-work ">
              Highest Bid <br />
              <p className="text-lg text-[#ffffff] pt-1">0.33 wETH </p>
            </div>
          </div>{" "}
        </div>
        <div className="rounded-2xl flex-auto mb-8 md:mb-0">
          <img src={SpaceGirl} alt="pic" className="w-full" />
          <div className="bg-[#3B3B3B]">
            <div className="text-2xl font-work pt-4 pb-2 pl-5 font-semibold">
              DSGN Animals
            </div>
            <div className="image flex items-center pb-3 pl-5 ">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-lg">MrFox</p>
            </div>
          </div>
          <div className="flex bg-[#3B3B3B] pt-2 pb-3 rounded-b-2xl">
            <div className="flex-auto pl-5 text-[#6e6e6e] font-work">
              Price <br />
              <p className="text-lg text-[#ffffff] pt-1">1.63 ETH</p>
            </div>
            <div className="flex-auto text-end pr-5 text-[#6e6e6e] font-work ">
              Highest Bid <br />
              <p className="text-lg text-[#ffffff] pt-1">0.33 wETH </p>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="rounded-2xl flex-auto mb-8 md:mb-0 md:hidden lg:hidden xl:block">
          <img src={SpaceShip} alt="pic" className="w-full" />
          <div className="bg-[#3B3B3B]">
            <div className="text-2xl font-work pt-4 pb-2 pl-5 font-semibold">
              DSGN Animals
            </div>
            <div className="image flex items-center pb-3 pl-5 ">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-lg">MrFox</p>
            </div>
          </div>
          <div className="flex bg-[#3B3B3B] pt-2 pb-3 rounded-b-2xl">
            <div className="flex-auto pl-5 text-[#6e6e6e] font-work">
              Price <br />
              <p className="text-lg text-[#ffffff] pt-1">1.63 ETH</p>
            </div>
            <div className="flex-auto text-end pr-5 text-[#6e6e6e] font-work ">
              Highest Bid <br />
              <p className="text-lg text-[#ffffff] pt-1">0.33 wETH </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
