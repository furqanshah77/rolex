import React from "react";
import Para from "../../components/common/para";
import Price from "../../components/common/price";
import Image from "next/image";
import Watch from "@/../Public/img/watch.png";
import Button from "../../components/button/button";

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center h-full sm:min-h-[80dvh] ">
        <div className="flex flex-col gap-y-5 justify-center items-center w-full sm::order-last lg:order-first">
          <h1 className="font-bold text-4xl text-center lg:text-start text-lightTitle dark:text-darkTitle">
            NEW WATCH COLLECTIONS B720
          </h1>
          <Para
            text="Latest arrival of the new imported watches of the B720 series, with a modern and resistant design."
            className="text-lightText dark:text-darkText text-center lg:text-start"
          />
          <Price price="$1250" className="md:!text-3xl" />

          <div className="flex items-center justify-center ">
            <Button
              text="Discover"
              className="!bg-[#BFBFBF] !text-lightText md:!px-3 px-1"
            />
            <Button
              text="ADD TO CART"
              className="text-white !bg-darkBackground dark:!bg-[#3D3D3D] md:py-6 py-4 md:px-6 px-3"
            />
          </div>
        </div>
        <div className="bg-lightFirst dark:bg-darkFirst lg:h-full md:h-[60dvh] h-[40dvh] w-full  order-first lg:order-last flex overflow-visible justify-center items-center relative">
          <div className=" w-full h-[200px] bg-lightFirst dark:bg-darkFirst border absolute -top-36 -z-20" />
          <div className="relative h-full sm:w-[40%] w-[50%] lg:hidden">
            <div className="md:min-h-[80dvh] min-h-[60dvh] w-full absolute md:-left-32 lg:-left-24 -left-10 -top-36 bg-lightBackground dark:bg-darkBackground  " />
          </div>
          <div className="flex justify-center items-center lg:h-[500px] md:h-[350px] h-[220px] lg:w-[500px] md:w-[350px] w-[220px]">
            <Image alt="watch" src={Watch} width={1000} height={1000} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
