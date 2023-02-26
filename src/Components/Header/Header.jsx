import React from "react";
import { CiDark } from "react-icons/ci";

function Header() {
  return (
    <div className="flex items-center justify-between p-5 bg-orange-700 h-20 sticky border-b border-b-black">
      <h1>Where in the world?</h1>
      <div className="flex items-center">
        <CiDark />
        <h3 className="pl-2">Dark Mode</h3>
      </div>
    </div>
  );
}

export default Header;
