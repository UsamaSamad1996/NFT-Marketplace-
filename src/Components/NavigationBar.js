import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NFTlogo from "../Images/logo.png";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

const NavigationBar = () => {
  //  const hideBodyScroll = () => {
  //   if(typeof window !== 'undefined'){
  //     document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  //   }
  //   }

  //    const showBodyScroll = () => {
  //     if(typeof window !== 'undefined'){
  //     document.getElementsByTagName('body')[0].style.overflow = 'auto'
  //     }
  //   }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="topbar flex justify-around bg-[#2B2B2B] text-[#ffffff] md:h-[110px] h-[90px] items-center font-work font-semibold pl-5 pr-8 md:px-10 lg:px-0">
      <div className="logo flex-auto  flex lg:pl-12 xl:pl-20 ">
        <img className="w-4/5 md:w-auto " src={NFTlogo} alt="logo" />
      </div>
      <div className="Menu flex-auto lg:flex justify-evenly items-center hidden ">
        <a href="home">Marketplace</a>
        <a href="about">Rankings</a>
        <a href="connect">Connect a Wallet</a>
        <button className="bg-[#A259FF] h-14 rounded-3xl py-3 px-8 ">
          <PersonOutlineOutlinedIcon /> Sign Up
        </button>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="Menu flex-auto flex lg:pr-20  lg:hidden justify-end items-center text-5xl "
      >
        <MenuOpenOutlinedIcon className="text-5xl" />
      </button>

      {isOpen ? (
        <div
          className="top-[100px] left-0 flex flex-col items-center gap-12 h-screen text-xl pt-6 font-work text-[#ffffff] bg-[#2B2B2B]  absolute transition duration-150 ease-in w-full lg:hidden border-t border-white"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <a href="home">Marketplace</a>
          <a href="about">Rankings</a>
          <a href="connect">Connect a Wallet</a>
          <button className="bg-[#A259FF] h-14 rounded-3xl py-3 px-8 text-white">
            <PersonOutlineOutlinedIcon /> Sign Up
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavigationBar;
