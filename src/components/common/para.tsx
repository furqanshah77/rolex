import React from "react";

interface ParaI {
  text: string;
  className?: string;
}

const Para = ({ text, className }: ParaI) => {
  return <p className={`${className} font-medium text-lg`}>{text}</p>;
};

export default Para;
