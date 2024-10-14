import Image from "next/image";
import React from "react";
import Heading from "@/components/common/heading";
import Para from "@/components/common/para";
import Story from "@/../Public/img/story.png";
const OurStory = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-y-24 gap-x-28 h-fit">
      <div className="flex flex-col gap-y-5 justify-center lg:items-end items-center w-full mx-5 md:mx- h-fit ">
        <div className="sm:w-[600px] md:w-[400px] w-[250px]  sm:h-[600px] md:h-[400px] h-[250px] flex justify-center items-center relative">
          <Image src={Story} alt="watch" width={1000} height={1000} />
          <div className="sm:w-[600px] md:w-[400px] w-[250px]  sm:h-[600px] md:h-[400px] h-[250px] flex justify-center items-center bg-lightFirst dark:bg-darkFirst absolute sm:-left-16 -left-10 sm:top-14 top-10 -z-20" />
        </div>
      </div>
      <div className="flex flex-col gap-y-5 lg:justify-start justify-center lg:items-start items-center w-full">
        <Heading
          text="Our Story"
          className="lg:!justify-start lg:!items-start "
        />
        <h1 className="font-bold sm:text-4xl text-center lg:text-start text-lightTitle dark:text-darkTitle lg:w-[400px] w-full text-3xl">
          Inspirational Watch of this year
        </h1>
        <Para
          text="The latest and modern watches of this year, is available in various presentations in this store, discover them now."
          className=" text-lightText dark:text-darkText lg:w-[400px] w-full"
        />
      </div>
    </div>
  );
};
export default OurStory;
