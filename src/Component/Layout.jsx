import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <NavBar></NavBar>

      <Outlet />

      <Footer></Footer>
    </div>
  );
}
