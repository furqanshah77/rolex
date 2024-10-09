import Image from "next/image";
import React from "react";
import Button from "../button/button";

interface CardI {
  image: string;
  text: string;
  price: string;
}

const Card = ({ image, text, price }: CardI) => {
  return (
    <div className="w-[290px] xl:w-[350px] shadow-sm py-10 gap-y-6 px-6 dark:shadow-darkText shadow-lightText flex flex-col items-center dark:bg-darkBorder bg-lightBorder relative">
      <div className="w-fit h-fit bg-lightFirst dark:bg-darkFirst px-3 py-1 text-white font-medium flex items-center -rotate-90 absolute -left-[14px] top-8">
        SALE
      </div>
      <div className="w-[150px] h-[250px]">
        <Image src={image} alt="product" width={1000} height={1000} />
      </div>

      <p className="font-bold text-xl text-lightTitle dark:text-darkTitle">
        {text}
      </p>
      <p className="font-bold text-xl text-lightFirst dark:text-darkFirst">
        {price}
      </p>

      <div className="justify-center w-full flex items-center h-fit">
        <Button text="Add to cart" className="!py-4 !px-8" />
      </div>
    </div>
  );
};

export default Card;
