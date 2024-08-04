import React from "react";
import imgs1 from "../assets/poert1.png";
import imgs2 from "../assets/port2.png";
import imgs3 from "../assets/port3.png";

export default function Potfolio() {
  return (
    <div className="container m-10">
      <h1 className="text-5xl text-center font-semibold ">PORTFOLIO COMPONENT</h1>
      <div className="imgs-portfolio row-tw gap-4 mt-10  justify-center ">
        <img className="w-1/4 rounded-lg" src={imgs1} alt="Home-img" />
        <img className="w-1/4 rounded-lg" src={imgs2} alt="Home-img" />
        <img className="w-1/4 rounded-lg" src={imgs3} alt="Home-img" />
        <img className="w-1/4 rounded-lg" src={imgs1} alt="Home-img" />
        <img className="w-1/4 rounded-lg" src={imgs2} alt="Home-img" />
        <img className="w-1/4 rounded-lg" src={imgs3} alt="Home-img" />
      </div>
    </div>
  );
}
