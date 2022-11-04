import React from "react";
import "./counter.scss";
import SingleCounter from "../singleCounter/SingleCounter";
import { dataCounter } from "../../local data/dataCounter";

const Counter = () => {
  return (
    <div className="counter section">
      {dataCounter.map((item) => {
        return <SingleCounter key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Counter;
