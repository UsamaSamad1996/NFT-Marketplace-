import React from "react";
import AnimaKid from "../Images/anima.jpg";
import DogPapa from "../Images/dogpapa.png";
import DogChild1 from "../Images/dogchild1.png";
import DogChild2 from "../Images/dogchild2.png";
import MashRoom from "../Images/mashroom.png";
import MashRoom1 from "../Images/mashroom1.png";
import MashRoom2 from "../Images/mashroom2.png";
import Jackson from "../Images/jackson.png";
import Jackson1 from "../Images/jackson1.png";
import Jackson2 from "../Images/jackson2.png";
// import Box from "../Images/purple.png";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TrendingCollection = () => {
  return (
    <div className="pt-20 md:pt-0 bg-[#2B2B2B] text-[#ffffff]  flex flex-col justify-center items-center px-10 md:px-0 md:pb-24">
      <div className="headings    xl:w-[78%] lg:w-[82%] md:w-[90%]">
        <h1 className="text-4xl lg:text-5xl font-work font-bold">
          Trending Collection
        </h1>
        <p className="text-xl pt-4 font-work">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="cards  xl:w-[78%] lg:w-[82%] md:w-[90%] mt-10 flex md:gap-6 xl:gap-12">
        <div className="  flex flex-col  flex-auto">
          <img src={DogPapa} alt="pic" />
          <div className="dogchilds flex mt-6 mb-2 gap-4 md:gap-3 lg:gap-3 xl:gap-1">
            <div className="flex-auto flex justify-start">
              <img src={DogChild1} alt="child1" className="xl:w-32 xl:h-32" />
            </div>
            <div className="flex-auto flex justify-center">
              <img src={DogChild2} alt="child2" className="xl:w-32 xl:h-32" />
            </div>
            <div className="flex-auto flex justify-center items-center xl:ml-[5px] md:ml-[2px] lg:ml-[0px] bg-[#A259FF] xl:w-[118px] xl:h-[127px] rounded-t-2xl rounded-b-3xl md:rounded-2xl xl:rounded-3xl">
              <p className="font-mono px-3 text-2xl md:text-2xl md:px-[16px] lg:px-[7px] xl:text-3xl ">
                1024+
              </p>
            </div>
          </div>
          <div>
            <div className="text-2xl font-work pt-3 pb-2 font-semibold">
              DSGN Animals
            </div>
            <div className="image flex items-center pb-3 ">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-xl">MrFox</p>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex  md:flex-col flex-auto">
          {" "}
          <img src={MashRoom} alt="pic" />
          <div className="dogchilds flex mt-6 mb-2 md:gap-3 xl:gap-1">
            <div className="flex-auto flex justify-start">
              <img src={MashRoom1} alt="child1" className="xl:w-32 xl:h-32" />
            </div>
            <div className="flex-auto flex justify-center">
              <img src={MashRoom2} alt="child2" className="xl:w-32 xl:h-32" />
            </div>
            <div className="flex-auto flex justify-center items-center xl:ml-[5px] md:ml-[2px] lg:ml-[0px] bg-[#A259FF] xl:w-[118px] xl:h-[127px] rounded-2xl xl:rounded-3xl">
              <p className="font-mono md:text-2xl md:px-[16px] lg:px-[7px] xl:text-3xl ">
                1024+
              </p>
            </div>
          </div>
          <div>
            <div className="text-2xl font-work pt-3 pb-2 font-semibold">
              Magic Mashrooms
            </div>
            <div className="image flex items-center pb-3 ">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-xl">Shroomie</p>
            </div>
          </div>
        </div>

        <div className=" hidden lg:flex  lg:flex-col flex-auto">
          {" "}
          <img src={Jackson} alt="pic" className="" />
          <div className="dogchilds flex mt-6 mb-2 md:gap-3 xl:gap-1">
            <div className="flex-auto flex justify-start">
              <img src={Jackson1} alt="child1" className="xl:w-32 xl:h-32" />
            </div>
            <div className="flex-auto flex justify-center">
              <img src={Jackson2} alt="child2" className="xl:w-32 xl:h-32" />
            </div>
            <div className="flex-auto flex justify-center items-center xl:ml-[5px] md:ml-[2px] lg:ml-[0px] bg-[#A259FF] xl:w-[118px] xl:h-[127px] rounded-2xl xl:rounded-3xl">
              <p className="font-mono md:text-2xl md:px-[16px] lg:px-[7px] xl:text-3xl ">
                1024+
              </p>
            </div>
          </div>
          <div>
            <div className="text-2xl font-work pt-3 pb-2 font-semibold">
              Disco Machines
            </div>
            <div className="image flex items-center pb-3 ">
              <img
                src={AnimaKid}
                alt="ncle"
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="text-xl">BeKind2Robots</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
