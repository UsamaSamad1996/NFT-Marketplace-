import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import Banner from "../Images/banner.png";
import AnimaKid from "../Images/anima.jpg";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const HeroSection = () => {
  return (
    <div className="mainDiv  md:pt-16 md:pb-14 lg:pb-14 xl:pb-32   flex justify-center items-center text-[#ffffff] bg-[#2B2B2B]">
      <div className="wrapper   xl:w-[78%] lg:w-[82%] md:w-[90%] flex md:flex-row flex-col pt-16 md:pt-0 px-10 md:px-0">
        <div className="leftSide  md:w-[50%] flex flex-col">
          <h1 className="font-work  text-4xl leading-tight md:text-5xl  lg:text-6xl xl:text-7xl font-bold tracking-wider  xl:pr-24 mb-5 ">
            Discover Digital Art & Collect NFTs
          </h1>
          <div className="  flex items-center mb-6">
            <h3 className="flex flex-wrap font-work text-lg  md:text-lg xl:text-2xl tracking-wider capitalize md:pr-5 md:leading-7 xl:leading-9">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h3>
          </div>

          <div className="mb-5 hidden md:flex items-center">
            {" "}
            <button className="bg-[#A259FF]  py-5 font-work text-lg rounded-3xl lg:w-3/5 md:w-3/5 xl:w-2/5 ">
              <RocketLaunchOutlinedIcon /> Get Started
            </button>
          </div>

          <div className="Accounts hidden md:flex lg:my-3 ">
            <div className="totalSale flex-auto flex flex-col justify-center">
              <h1 className="font-mono xl:text-5xl lg:text-4xl md:text-3xl">
                240k+
              </h1>
              <p className="text-xl xl:text-2xl">Total Sale</p>
            </div>

            <div className="totalSale flex-auto flex flex-col justify-center">
              <h1 className="font-mono xl:text-5xl lg:text-4xl md:text-3xl">
                120k+
              </h1>
              <p className="text-xl xl:text-2xl">Auctions</p>
            </div>
            <div className="totalSale flex-auto flex flex-col justify-center">
              <h1 className="font-mono xl:text-5xl lg:text-4xl md:text-3xl">
                140k+
              </h1>
              <p className="text-xl xl:text-2xl">Artists</p>
            </div>
          </div>
        </div>
        <div className="rightSide md:w-[50%]  flex items-end  flex-col">
          <div className="image  xl:w-4/5 flex justify-center ">
            <img
              src={Banner}
              alt="banner"
              className="flex flex-auto object-cover "
            />
          </div>
          <div className="flex flex-col items-start  bg-[#3B3B3B] w-full xl:w-4/5 pl-5 rounded-b-3xl">
            <div className="text-2xl font-work pt-3 pb-2 font-semibold">
              Space Walking
            </div>
            <div className="image flex items-center pb-3 ">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-xl">AnimaKid</p>
            </div>
          </div>
        </div>
        <div className="mobile md:hidden">
          {" "}
          <div className="h-[15%] pt-10 md:pt-0 items-center ">
            {" "}
            <button className="bg-[#A259FF]  py-5 font-work text-xl md:text-lg rounded-3xl w-full lg:w-3/5 md:w-3/5 xl:w-2/5 font-semibold ">
              <RocketLaunchOutlinedIcon /> Get Started
            </button>
          </div>
          <div className="Accounts pt-10 flex h-[18%] xl:h-[20%] gap-6">
            <div className="totalSale flex-auto flex flex-col justify-center items-start">
              <h1 className="font-mono font-bold text-2xl lg:text-4xl md:text-3xl">
                240k+
              </h1>
              <p className="text-lg">Total Sale</p>
            </div>

            <div className="totalSale flex-auto flex flex-col justify-center items-start">
              <h1 className="font-mono font-bold text-2xl lg:text-4xl md:text-3xl">
                120k+
              </h1>
              <p className="text-lg">Auctions</p>
            </div>
            <div className="totalSale flex-auto flex flex-col justify-center items-start">
              <h1 className="font-mono font-bold text-2xl lg:text-4xl md:text-3xl">
                140k+
              </h1>
              <p className="text-lg">Artists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
