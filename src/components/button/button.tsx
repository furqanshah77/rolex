import Link from "next/link";
import React from "react";

interface ButtonI {
  text: string;
  className?: string;
  link?: string;
  isOutline?: boolean;
}

const Button = ({ text, className, link, isOutline }: ButtonI) => {
  return (
    <Link
      href={link || "/"}
      className={`${className} ${
        isOutline ? "border-white border" : "bg-button text-white"
      } md:px-8 px4 md:py-2 py-1 rounded-sm md:text-base text-sm shadow-lg`}
    >
      <button className="w-full h-full ">{text}</button>
    </Link>
    );
};
export default Button;
