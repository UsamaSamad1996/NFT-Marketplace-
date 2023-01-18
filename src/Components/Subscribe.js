import React, { useState } from "react";
import Astronout from "../Images/astronot.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="xl:pt-5  bg-[#2B2B2B] text-[#ffffff]  flex flex-col justify-center items-start md:items-center px-10 md:px-0 md:pb-24 pb-10">
      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] mt-10 flex md:flex-row flex-col   md:gap-5 xl:gap-14  md:bg-[#3B3B3B] rounded-3xl">
        <div className="image flex-auto md:my-10 md:ml-10 lg:my-16 lg:ml-16 md:w-[50%] ">
          <img src={Astronout} alt="Astronout" className="w-full h-full " />
        </div>
        <div className="from flex-auto  md:my-10 md:mr-10 lg:my-16 lg:mr-16 flex flex-col md:w-[50%]  py-3">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-mono tracking-wide xl:pr-5 xl:leading-tight md:pb-2 pt-8 pb-6 md:py-0 ">
            Join Our Weekly Digest
          </h1>
          <p className="lg:tracking-wide text-lg xl:text-2xl md:leading-6 font-mono pb-10 md:pb-2 xl:py-5">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="lg:pt-5 xl:pt-12 flex flex-col lg:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email here"
              className="w-full py-4 md:py-3 lg:py-4  xl:py-5 rounded-3xl focus:outline-none text-base xl:text-2xl text-black pl-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="py-4  md:py-3 lg:py-4 xl:py-5 rounded-3xl xl:px-10 md:px-4 bg-[#A259FF] xl:font-semibold text-lg md:text-base xl:text-xl flex lg:ml-[-100px] xl:ml-[-150px] justify-center items-center mt-5 lg:mt-0">
              <MailOutlineIcon className="mr-2" /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
