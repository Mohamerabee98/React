import React from "react";

export default function Footer() {
  return (
    <footer >
      <div className="bg-gray-700 p-14 ">
        <div className="container row-tw gap-3 text-center  justify-between text-white">
          <div className="leading-8 text-center">
            <h1 className="font-bold mb-2 text-3xl">LOCATION</h1>
            <p className="text-lg">2215 John Daniel Drive</p>
            <p className="text-lg">MO 65243</p>
          </div>





          <div >
            <h1 className="font-bold mb-2 text-2xl">AROUND THE WEB</h1>
            <ul className="flex justify-between mt-5">
              <li>
                <i className="fa-brands fa-facebook border-2 border-white rounded-3xl p-2"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin border-2 border-white rounded-3xl p-2"></i>

              </li>
              <li>
                <i className="fa-brands fa-twitter border-2 border-white rounded-3xl p-2"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram border-2 border-white rounded-3xl p-2"></i>
              </li>

            </ul>
          </div>

          <div className="leading-10 text-center">
            <h1 className="font-bold mb-2 text-2xl">ABOUT FREELANCER</h1>
            <p className="text-lg">
              Freelance is a free to use, licensed Tailwind theme <br /> created
              by
              <span className="font-extrabold text-xl text-cyan-200 ps-2">
                Mohamed Rabee
              </span>
            </p>
          </div>
        </div>
      </div>



      <div className="text-center bg-gray-800 p-5 text-white">
        <p className="text-lg">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
