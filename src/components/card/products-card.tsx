import Image from "next/image";
import React from "react";
import { RiShoppingBag4Line } from "react-icons/ri";

interface ProductsCardI {
  image: string;
  text: string;
  price: string;
}

const ProductsCard = ({ text, price, image }: ProductsCardI) => {
  return (
    <div>
      <div className="w-[290px] xl:w-[350px] shadow-sm py-10 gap-y-4 px-6 dark:shadow-darkText shadow-lightText flex flex-col items-center relative bg-lightBorder dark:bg-darkBorder">
        <div className="w-[150px] h-[250px]">
          <Image src={image} alt="product" width={1000} height={1000} />
        </div>
        <p className="font-bold text-2xl text-lightTitle dark:text-darkTitle">
          {text}
        </p>
        <p className="font-bold text-2xl text-lightFirst dark:text-darkFirst">
          {price}
        </p>
        <div className="w-fit h-fit p-3 text-white bg-button text-xl absolute right-0 bottom-0 ">
          <RiShoppingBag4Line />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
