"use client";
import React, { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <IoMoonOutline className="dark:hidden flex" />
      <MdOutlineWbSunny className="dark:flex hidden dark:text-lightTitle " />
    </div>
  );
};

export default Theme;
