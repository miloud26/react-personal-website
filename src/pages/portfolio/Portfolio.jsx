import React from "react";
import "./portfolio.scss";
import { dataProject } from "../../local data/dataProject";
import CardProject from "../../components/card project/CardProject";
const Portfolio = () => {
  return (
    <>
      {dataProject.map((item) => {
        return <CardProject key={item.id} {...item} />;
      })}
    </>
  );
};

export default Portfolio;
