import React from "react";
import "./Component.css";
// import Header from "./Header";
// import { useAuth0 } from "@auth0/auth0-react";

const About = () => {
  // const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="about-page ">
        <div className="container about-sec">
          <div className="row ">
            <div className="col about-box mt-5">
              <h2> Welcome to Summertime Palaces</h2>
              <div className="about-des">
                <p>
                  At Summertime Palaces, we are passionate about transforming
                  your travel experience into seamless and unforgettable
                  journeys. As your dedicated travel companion, we go beyond
                  mere bookings – we craft exceptional stays.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col mission">
              <h2>Our Mission </h2>
              <h4>Empowering Your Travel Dreams</h4>
              <p>
                At the heart of Summertime Palaces is a mission to empower
                travelers like you. We strive to make hotel booking not just a
                transaction but a delightful journey in itself. Our platform is
                designed with your needs in mind, ensuring a user-friendly and
                comprehensive solution for all your accommodation requirements.
              </p>
            </div>
          </div>
          <div className=" Why-us row">
            <h2>Why Choose Summertime Palaces</h2>
            <div className="row">
              <div className="col why-us-box">
                <h4>Unrivaled Selection</h4>
                <p>
                  Discover a vast array of accommodations, from luxurious
                  resorts to cozy boutique hotels. Summertime Palaces brings you
                  a curated selection, ensuring quality and diversity to suit
                  every taste and budget.
                </p>
              </div>
              <div className="col why-us-box">
                <h4>Seamless Booking Experience</h4>
                <p>
                  Our intuitive and user-friendly interface makes booking hotels
                  a breeze. Just a few clicks, and you're on your way to
                  unlocking the door to your dream stay.
                </p>
              </div>
              <div className="col why-us-box">
                <h4>Exclusive Deals and Discounts</h4>
                <p>
                  Enjoy access to exclusive deals and discounts when you book
                  through Summertime Palaces. We negotiate with hotels to bring
                  you the best possible rates, ensuring you get more value for
                  your money.
                </p>
              </div>
              <div className="col why-us-box">
                <h4>24/7 Customer Support</h4>
                <p>
                  Your comfort is our priority. Our dedicated customer support
                  team is available around the clock to assist you with any
                  inquiries or concerns. We're here to ensure your journey is
                  smooth from start to finish.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-3 mt-5">
            <div className="col sign-up-start">
              <h2>Start Your Journey Today</h2>
              <p>
                Whether you're planning a business trip, a romantic getaway, or
                a family vacation, let Summertime Palaces be your trusted
                companion. Start your journey with us today and experience the
                difference in travel.
              </p>
              <button onClick={() => loginWithRedirect()}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
