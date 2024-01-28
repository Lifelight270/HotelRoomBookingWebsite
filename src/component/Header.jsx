import React from "react";
import { NavLink } from "react-router-dom";
import "./Component.css";

const Header = () => {
  return (
    <>
      <nav className="navBar ">
        <div className="container">
          <div className="row ">
            <div className="col title">
              <span>
                <img src="../image/c.png" alt="" />
              </span>
              <h2 className="">Summertime Palaces</h2>
            </div>
            <div className="col">
              <ul>
                <li>
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={{ textDecoration: "none" }}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/room" style={{ textDecoration: "none" }}>
                    Room
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/logIn" style={{ textDecoration: "none" }}>
                    Log In
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
