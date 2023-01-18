import React from "react";
import NFTpic from "../Images/NFThighlight.png";
import AnimaKid from "../Images/anima.jpg";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const NFThighlights = () => {
  return (
    <div className="pb-20 bg-[#2B2B2B]">
      <div
        style={{ backgroundImage: `url(${NFTpic})` }}
        className="xl:h-[700px] h-[700px] md:h-[600px] md:pb-10 lg:pb-0 xl:pb-10 lg:h-[550px] bg-no-repeat lg:bg-contain  bg-center  xl:bg-cover flex justify-center md:items-end lg:items-end"
      >
        <div className=" xl:w-[78%] lg:w-[82%] md:w-[90%] xl:h-[230px] lg:mb-20 flex flex-col justify-center md:flex-row ">
          <div className="left flex-auto flex flex-col justify-end md:block pt-40 md:pt-0">
            <button className="image flex  items-center py-2 pl-5 bg-[#3B3B3B] w-[10rem] rounded-full">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-6 h-6 rounded-full mr-3"
              />
              <p className="text-lg text-white  ">Shroomie</p>
            </button>
            <h1 className="text-[#ffffff] text-4xl lg:text-5xl xl:text-6xl pt-7 pb-9 font-bold md:font-semibold font-mono">
              Magic Mashrooms
            </h1>
            <button className="bg-white py-4 hidden md:block rounded-2xl  font-semibold px-10">
              <VisibilityOutlinedIcon className="text-[#A259FF] mr-2" />
              See NFT
            </button>
          </div>
          <div className="right flex-auto flex flex-col md:flex-row md:justify-end md:items-center items-start">
            <div className="py-5 px-3   md:h-[80%] xl:w-[80%] lg:w-[100%] w-full  bg-[#3B3B3B] bg-opacity-50 rounded-3xl flex flex-col justify-center ">
              <div className="flex items-center justify-center font-work text-xl">
                {" "}
                <h1 className="text-white pb-2">Auction ends in :</h1>
              </div>
              <div className="flex">
                {" "}
                <div className="text-[#ffffff] flex-auto text-center">
                  <p className="text-5xl font-bold font-serif">59</p>
                  <br />
                  <p>Hours</p>
                </div>{" "}
                <p className="text-[#ffffff] font-bold text-5xl">:</p>
                <div className="text-[#ffffff] flex-auto text-center">
                  <p className="text-5xl font-bold font-serif">59</p>
                  <br />
                  <p>Minutes</p>
                </div>{" "}
                <p className="text-[#ffffff] font-bold text-5xl">:</p>
                <div className="text-[#ffffff] flex-auto text-center">
                  <p className="text-5xl font-bold font-serif">59</p>
                  <br />
                  <p>Seconds</p>
                </div>{" "}
              </div>
            </div>
            <button className="bg-white py-4  md:hidden rounded-2xl w-full mt-10  font-semibold px-10">
              <VisibilityOutlinedIcon className="text-[#A259FF] mr-2" />
              See NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFThighlights;
