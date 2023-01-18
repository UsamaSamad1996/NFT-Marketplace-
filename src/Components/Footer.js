import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RedeemIcon from "@mui/icons-material/Redeem";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="xl:pt-5  bg-[#3B3B3B] text-[#ffffff]  flex flex-col justify-center items-start md:items-center px-10 md:px-0 md:pb-24">
      {" "}
      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] lg:mt-10 flex lg:flex-row flex-col      bg-[#3B3B3B] border-b-2 border-[#5B5B5B]  pb-5">
        <div className="from flex-auto  flex flex-col lg:w-[30%]  lg:pr-5   w-full my-8">
          <h1 className="text-2xl lg:text-3xl xl:text-3xl font-bold font-mono tracking-wide  xl:leading-tight     pb-5 ">
            <RedeemIcon className="text-[#A259FF]" /> NFT Marketplace
          </h1>

          <p className="lg:tracking-wide text-lg xl:text-xl lg:leading-6 font-mono text-[#7B7B7B]   pb-5">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <p className="lg:tracking-wide text-lg xl:text-xl md:leading-6 font-mono  text-[#7B7B7B]   pb-5">
            Join Our Community
          </p>
          <div>
            <InstagramIcon className="mr-5 " style={{ fontSize: "2rem" }} />
            <TwitterIcon className="mr-5" style={{ fontSize: "2rem" }} />
            <YouTubeIcon style={{ fontSize: "2.5rem" }} />{" "}
          </div>
        </div>
        <div className="from flex-auto  flex flex-col lg:w-[30%]  lg:px-10 lg:pr-5   w-full my-8">
          <h1 className="text-2xl lg:text-3xl xl:text-3xl font-bold font-mono tracking-wide  xl:leading-tight     pb-5 ">
            Explore
          </h1>

          <p className="lg:tracking-wide text-lg xl:text-xl lg:leading-6 font-mono text-[#7B7B7B]   pb-5">
            MarketPlace
          </p>
          <p className="lg:tracking-wide text-lg xl:text-xl md:leading-6 font-mono  text-[#7B7B7B]   pb-5">
            Rankings
          </p>
          <p className="lg:tracking-wide text-lg xl:text-xl md:leading-6 font-mono  text-[#7B7B7B]   pb-5">
            Connect Wallet
          </p>
        </div>
        <div className="from flex-auto  flex flex-col lg:w-[40%] w-full my-8">
          <h1 className="text-3xl lg:text-4xl xl:text-3xl font-bold font-mono tracking-wide xl:pr-5 xl:leading-tight mb-5 ">
            Join Our Weekly Digest
          </h1>

          <p className="lg:tracking-wide text-lg xl:text-xl md:leading-6 font-mono  text-[#7B7B7B] mb-10">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className=" flex flex-col lg:flex-row pt-2">
            <input
              type="email"
              required
              placeholder="Enter your email here"
              className="w-full py-4 md:py-3 lg:py-4  xl:py-4 rounded-3xl focus:outline-none text-base xl:text-2xl text-black pl-5"
            />
            <button className="py-4  md:py-3 lg:py-4 xl:py-4 rounded-3xl xl:px-10 md:px-4 bg-[#A259FF] xl:font-semibold text-lg md:text-base xl:text-xl flex lg:ml-[-100px] xl:ml-[-150px] justify-center items-center mt-5 lg:mt-0">
              <MailOutlineIcon className="mr-2" /> Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] mt-10 flex md:flex-row flex-col      bg-[#3B3B3B]  ">
        <p className="text-[#7B7B7B]">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </div>
  );
};

export default Footer;
