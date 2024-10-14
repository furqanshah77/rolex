"use client";
import React, { useState } from "react";
import { FiWatch } from "react-icons/fi";

import { AiOutlineShopping } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import Sidebar from "./sidebar";
import Theme from "../theme-toggle/theme";
import { navList } from "@/constant/navlist";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between sm:gap-20 gap-10 items-center py-5 w-full dark:text-darkTitle overflow-hidden z-50 bg-transparent sticky top-0">
      <div className="flex gap-36 items-center justify-between font-bold text-3xl">
        <div className="flex sm:gap-4 gap-2 items-center font-bold sm:text-3xl text-2xl">
          <FiWatch />
          <h1>ROLEX</h1>
        </div>
        <ul className="lg:flex gap-10 text-lg font-semibold hidden">
          {navList.map((nav) => (
            <li key={nav.name}>{nav.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex sm:gap-10 gap-3 sm:px-6 px-3 items-center font-bold sm:text-3xl text-2xl">
        <Theme />

        <AiOutlineShopping className="dark:!text-lightTitle" />
        <BiGridAlt
          onClick={() => setIsOpen(true)}
          className="flex lg:hidden dark:!text-lightTitle"
        />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
