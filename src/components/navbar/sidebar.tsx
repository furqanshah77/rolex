import React from "react";
import { IoClose } from "react-icons/io5";

interface SideBarI {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SideBarI) => {
  const navList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Featured",
      link: "/",
    },
    {
      name: "Products",
      link: "/",
    },
    {
      name: "New",
      link: "/",
    },
  ];
  if (!isOpen) return null;
  return (
    <div className="absolute top-0 bg-white right-0 flex justify-between sm:w-[50%] w-full h-screen sm:h-fit z-10 shadow-md dark:bg-darkBackground">
      <div className="flex mx-auto">
        <ul className="flex flex-col px-2 py-12 gap-y-10 text-center text-lg font-semibold lg:hidden">
          {navList.map((nav) => (
            <li key={nav.name}>{nav.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <IoClose
          className="absolute sm:right-12 right-5 top-5 text-3xl font-bold lg:hidden flex"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default Sidebar;

{
  /*     <li>Home</li>
        <li>Featured</li>
        <li>Products</li>
        <li>New</li> */
}
