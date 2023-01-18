import React from "react";
import Icon1 from "../Images/icon.png";
import Icon2 from "../Images/icon2.png";
import Icon3 from "../Images/icon3.png";

export const HowItWorks = () => {
  return (
    <div className="xl:pt-20  bg-[#2B2B2B] text-[#ffffff]  flex flex-col justify-center items-start md:items-center px-10 md:px-0 md:pb-24">
      <div className="headings    xl:w-[78%] lg:w-[82%] md:w-[90%]">
        <h1 className="text-4xl lg:text-5xl font-work font-bold ">
          How It Works
        </h1>
        <p className="text-xl pt-4 font-work">Find out how to get started</p>
      </div>
      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] mt-10 flex md:flex-row flex-col md:gap-5 xl:gap-12 md:pt-8">
        <div className="bg-[#3B3B3B] rounded-3xl flex-auto px-8  md:px-4 xl:px-5 pt-2 pb-2 mb-6 md:mb-0">
          <img src={Icon1} alt="pic" className="w-full xl:px-6" />
          <div className="text-center xl:px-5 lg:py-4 pb-5">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold pb-3">
              Setup Your Wallet
            </h1>
            <p className="xl:pb-8 text-base lg:text-lg">
              Set up your wallet of choice. Connect it to the Animarket by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </div>
        <div className="bg-[#3B3B3B] rounded-3xl flex-auto px-8  md:px-4 xl:px-5 pt-2 pb-2 mb-6 md:mb-0">
          <img src={Icon2} alt="pic" className="w-full xl:px-6" />
          <div className="text-center xl:px-5 lg:py-4 pb-5">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold pb-3">
              Create Collection
            </h1>
            <p className="xl:pb-8 text-base lg:text-lg">
              Set up your wallet of choice. Connect it to the Animarket by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </div>{" "}
        <div className="bg-[#3B3B3B] rounded-3xl flex-auto px-8  md:px-4 xl:px-5 pt-2 pb-2 mb-6 md:mb-0">
          <img src={Icon3} alt="pic" className="w-full xl:px-6" />
          <div className="text-center xl:px-5 lg:py-4 pb-5">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold pb-3">
              Setup Your Wallet
            </h1>
            <p className="xl:pb-8 text-base lg:text-lg">
              Set up your wallet of choice. Connect it to the Animarket by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
