import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Testimonial from "@/../Public/img/testimonial.png";
import Profile from "@/../Public/img/profile.jpeg";
import Para from "../common/para";

const Review = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center sm:gap-y-32 md:gap-y-32 gap-y-14 gap-x-10 h-fit md:mt-10 ">
      <div className="flex flex-col gap-y-5 w-full px-10 xl:px-28 ">
        <div className="  bg-lightBorder dark:bg-darkBorder text-lightFirst dark:text-darkFirst w-fit h-fit px-4 py-3 sm:text-3xl text-xl">
          <ImQuotesLeft />
        </div>
        <Para
          text="They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions."
          className="lg:w-[400px] w-full text-lightText dark:text-darkText sm:text-lg text-sm"
        />
        <h2 className="font-bold md:text-xl text-lg text-lightTitle dark:text-darkTitle">
          March 27. 2021
        </h2>
        <div className="flex gap-x-5 items-center">
          <div className="w-20 h-20 rounded-full">
            <Image
              src={Profile}
              alt="Profile"
              width={1000}
              height={1000}
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-lightTitle dark:text-darkTitle">
              Lee Doe
            </h2>
            <p className="text-lightText dark:text-darkText sm:text-lg text-sm">
              Director of a company
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 justify-center items-center w-full h-fit ">
        <div className="sm:w-[600px] md:w-[400px] w-[250px]  sm:h-[600px] md:h-[400px] h-[250px] flex justify-center items-center relative">
          <Image src={Testimonial} alt="watch" width={1000} height={1000} />
          <div className="sm:w-[600px] md:w-[400px] w-[250px]  sm:h-[600px] md:h-[400px] h-[250px] flex justify-center items-center bg-lightFirst dark:bg-darkFirst absolute sm:left-16 left-6 sm:-top-14 -top-6 -z-20" />
        </div>
      </div>
    </div>
  );
};

export default Review;
