import React from "react";
import Greeting from "./Greeting";
import "./Content.css";

const MainBody = () => {
  return (
    <>
      <div className="content d-flex align-items-center">
        <div className="container">
          <div className="row ">
            <div className="col box ">
              <p className="fp">Luxury Awaits You.</p>
              <h2 className="ttl ">Welcome to Summertime palace</h2>
              <p>
                Your perfect stay starts now at Summertime palace. Enjoy
                comfort, luxury, and unforgettable moments.
              </p>
            </div>
            <div className="col d-flex justify-content-end align-items-center box">
              <div className="box2">
                <Greeting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
