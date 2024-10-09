import React from "react";
interface HeadingI {
  text: string;
  className?: string;
}

const Heading = ({ text, className }: HeadingI) => {
  return (
    <div
      className={`${className} flex flex-col gap-y-4 justify-center items-center w-full`}
    >
      <div className="space-y-3">
        <div className="border-t h-1 w-[80%] space-y-12  rounded-lg bg-lightFirst dark:bg-darkFirst m-auto" />
        <p className="font-semibold text-xl w-fit flex-col items-center gap-y-4 text-lightText dark:text-darkText">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Heading;
