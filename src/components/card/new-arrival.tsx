import Image from "next/image";
import React from "react";
import Button from "../button/button";

interface NewArrivalI {
  image: string;
  text: string;
  price: string;
}

const NewArrival = ({ image, text, price }: NewArrivalI) => {
  return (
    <div className="w-[290px] xl:w-[350px] shadow-sm py-10 gap-y-6 px-6 dark:hover:bg-darkFirst hover:bg-lightFirst dark:shadow-darkText shadow-lightText flex flex-col items-center dark:bg-darkBorder bg-lightBorder relative group">
      <div className="w-fit h-fit group-hover:bg-button dark:group-hover:bg-[#3D3D3D] bg-lightFirst dark:bg-darkFirst px-4 py-1 text-white font-medium flex items-center absolute right-5 top-5">
        NEW
      </div>
      <div className="w-[150px] h-[250px] mt-5">
        <Image src={image} alt="product" width={1000} height={1000} />
      </div>

      <p className="font-bold text-xl text-lightTitle dark:text-darkTitle dark:group-hover:text-lightTitle">
        {text}
      </p>
      <p className="font-bold text-xl text-lightFirst dark:text-darkFirst group-hover:text-lightTitle dark:group-hover:text-lightTitle">
        {price}
      </p>

      <div className="justify-center w-full flex items-center h-fit">
        <Button text="Add to cart" className="!py-4 !px-8 dark:group-hover:bg-[#3D3D3D] dark:shadow-sm dark:shadow-darkText" />
      </div>
    </div>
  );
};

export default NewArrival;
