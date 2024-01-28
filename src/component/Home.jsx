import React from "react";
import "./Component.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Menu;
