import React from "react";
import Category from "../Images/category.png";

const BrowseCategories = () => {
  return (
    <div className="pt-20 md:pt-0 bg-[#2B2B2B] text-[#ffffff]  flex flex-col justify-center items-center px-10 md:px-0 md:pb-24">
      <div className="headings  w-full   xl:w-[78%] lg:w-[82%] md:w-[90%]">
        <h1 className="text-4xl lg:text-5xl font-work font-bold">
          Browse Categories
        </h1>
        {/* <p className="text-xl pt-4 font-work">
          Checkout our weekly updated trending collection.
        </p> */}
      </div>
      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] mt-10 flex flex-wrap gap-6 md:gap-4 lg:gap-8 xl:gap-14 py-5">
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 ">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Art</p>
        </div>{" "}
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 ">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Collection</p>
        </div>{" "}
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 ">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Music</p>
        </div>{" "}
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 ">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Photography</p>
        </div>{" "}
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 ">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Video</p>
        </div>{" "}
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 ">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Art</p>
        </div>{" "}
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 lg:hidden xl:block">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Art</p>
        </div>{" "}
        <div className=" font-work  font-semibold bg-[#3B3B3B] rounded-3xl lg:flex-auto w-[46%] md:w-[23%] lg:w-auto mb-3 md:mb-0 lg:hidden xl:block">
          <img src={Category} alt="img" className="lg:w-full " />
          <p className="lg:text-xl py-4 md:py-6 pl-4 lg:pl-6">Art</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategories;
