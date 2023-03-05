// @flow
import * as React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className=" z-30 bg-gray-900 opacity-80 w-full p-3 fixed top-0 font-Poppin">
      <ul className=" font-bold text-back flex gap-3">
        <li className="px-2 py-4 text-base text-white  shadow-md  rounded-lg  hover:bg-slate-600 hover:opacity-90 hover:text-white transition-all duration-300 ease-in">
          <Link to="/welcome">Rigestration</Link>
        </li>
      </ul>
    </header>
  );
};
