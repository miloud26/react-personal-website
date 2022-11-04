import React from "react";
import "./singeCounter.scss";
import CountUp from "react-countup";
const SingleCounter = ({ id, value, text }) => {
  return (
    <div
      className="singleCounter"
      style={
        id === 1
          ? { borderRadius: "40px 0 0 40px" }
          : {} && id === 4
          ? { borderRadius: "0 40px 40px 0" }
          : {}
      }
    >
      <CountUp end={value} duration={2} />
      <div>{text}</div>
    </div>
  );
};

export default SingleCounter;
