import React from "react";
import imgHome from "../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="text-center p-20 bg-teal-500 text-white ">
      <img src={imgHome} className="w-64 mx-auto" alt="Home-img" />
      <h1 className="md:text-7xl mt-5 font-semibold  ">START FRAMEWORK</h1>
      <p className="mt-8 text-xl">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
