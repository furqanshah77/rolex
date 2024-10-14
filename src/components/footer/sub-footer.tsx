import React from "react";
import Para from "../common/para";
import Button from "../button/button";

const SubFooter = () => {
  return (
    <div className="xl:px-20">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-y-16 gap-x-10 justify-center items-center bg-lightFirst dark:bg-darkFirst w-full py-20 md:px-10 px-4">
        <div className="flex flex-col gap-y-14">
          <h1 className="font-bold md:text-4xl text-center lg:text-start text-lightTitle lg:w-[300px] w-full lg:text-3xl text-xl ">
            Subscribe Our Newsletter
          </h1>
          <Para
            text="Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more."
            className="text-lightText w-full md:!text-lg !text-base"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-lightText dark:text-darkText w-full md:py-6 py-2 md:px-6 px-2 "
          />
          <Button
            text="Subscribe"
            className="bg-button dark:bg-[#2B2B2B] text-white md:!text-2xl !text-base font-semibold md:py-6 !py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
