import React from "react";
import "./LaunchState.css";
import useLaunchData from "../launchData/LaunchData";
import { useState } from "react";
import { useEffect } from "react";

const LaunchState = () => {
  const { loading, data } = useLaunchData();
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(Date.now());
    }, 200);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  if (loading) {
    return null;
  }
  const currentDate = new Date(date - data.date_unix);
  const day = { day: "numeric" };
  const timePeriod = {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
    second: "numeric",
  };
  const formatDay = new Intl.DateTimeFormat("sv-SE", day).format(currentDate);
  const formatTime = new Intl.DateTimeFormat("sv-SE", timePeriod).format(
    currentDate
  );

  return (
    <>
      <div className="main-container">

        <h1 className="text">
          {formatDay}:{formatTime}
          
        </h1>
        <footer><p>see how long its been since last spacex launch</p>
        <div className="footer-div"><h3>made by maxi</h3></div>
        
        </footer>
      </div>
    </>
  );
};

export default LaunchState;
