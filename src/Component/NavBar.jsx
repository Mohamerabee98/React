import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-700 p-5 ">
      <div className="container flex justify-between">
        <div className="head">
          <h1 className="text-4xl p-2 font-bold text-white">
            <Link to={"home"}>Start Framework</Link>
          </h1>
        </div>
        <div className="links ">
          <ul className="flex gap-10 p-5  ">
            <NavLink to={"/about"}>
              <li className="text-white font-bold p-2 ">ABOUT</li>
            </NavLink>

            <NavLink to={"/portfolio"}>
              <li className="text-white font-bold p-2">PORTFOLIO</li>
            </NavLink>

            <NavLink to={"/contact"}>
              <li className="text-white font-bold p-2">CONTACT</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
