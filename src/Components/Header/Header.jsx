import React, { useState, useEffect } from "react";
import { CiDark } from "react-icons/ci";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const darkModeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-between p-5 bg-white h-20 sticky text-sm xl:px-[86px] xl:text-lg  dark:bg-darkElements">
      <h1 className="font-bold">Where in the world?</h1>
      <div
        className="flex items-center cursor-pointer"
        onClick={darkModeHandler}
      >
        <CiDark />
        <h3 className="pl-2">Dark Mode</h3>
      </div>
    </div>
  );
}

export default Header;
