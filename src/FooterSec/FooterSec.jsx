import React from "react";
import "./FooterSec.css";

const FooterSec = () => {
  return (
    <div className="footr">
      <div className="container">
        <div className="row">
          <div className="col py-3 foot_box">
            <h2>Support</h2>
            <div className="img-box">
              <img src="image/1.png" alt="" />
              <img src="image/2.jpg" alt="" />
              <img src="image/3.png" alt="" />
              <img src="image/4.png" alt="" />
              <img src="image/5.png" alt="" />
              <img src="image/6.png" alt="" />
            </div>
          </div>
          <div className="col  py-3 foot_box">
            <div className="Contact">
              <h2>Contact Information</h2>
              <h5>Summertime Palaces</h5>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Bhalwari, Rupandehi</span>
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>+977-1-0000000</span>
              </p>
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>summertimepalaces@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="col  py-3 foot_box">
            <h2>Connect with us</h2>
            <p className="Icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-square-threads"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-linkedin"></i>
            </p>
          </div>
        </div>
        <div className="copyright">
          <hr></hr>
          <p className="text-center">&#169;Copyright.All.rights.reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;
