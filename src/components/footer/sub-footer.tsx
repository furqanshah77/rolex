import React from "react";
import Para from "../common/para";
import Button from "../button/button";

const SubFooter = () => {
  return (
    <div className="px-20">
      <div className="grid grid-cols-2 gap-x-10 justify-center items-center bg-lightFirst dark:bg-darkFirst w-full py-20 px-10">
        <div className="flex flex-col gap-y-14">
          <h1 className="font-bold sm:text-4xl text-center lg:text-start text-lightTitle lg:w-[300px] w-full text-3xl">
            Subscribe Our Newsletter
          </h1>
          <Para text="Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more." className="text-lightText w-full" />
        </div>
        <div className="inline-flex items-center">
            <input type="text" placeholder="Enter your email" className="text-lightText dark:text-darkText w-full py-6 px-6" />
            <Button text="Subscribe" className="bg-button dark:bg-[#2B2B2B] text-white text-2xl font-semibold !py-6" />
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
