import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Greeting.css";

const Greeting = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getGreeting = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return { greeting: "Good Morning", icon: faSun };
    } else if (currentHour >= 12 && currentHour < 18) {
      return { greeting: "Good Afternoon", icon: faSun };
    } else {
      return { greeting: "Good Night", icon: faMoon };
    }
  };

  const { greeting, icon } = getGreeting();
  const iconStyle = {
    color: icon === faSun ? "red" : "#fff",
  };

  return (
    <>
      <p className="greetBox d-flex justify-content-center align-items-center">
        <div className="greeting">
          <h2>
            {greeting}
            <span className="icon" style={iconStyle}>
              <FontAwesomeIcon icon={icon} />
            </span>
          </h2>
          <p className="cTime pt-3">{currentTime.toLocaleTimeString()}</p>
          <p className="cDate">{currentTime.toDateString()}</p>
        </div>
      </p>
    </>
  );
};

export default Greeting;
