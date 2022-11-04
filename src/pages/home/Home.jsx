import React, { useState } from "react";
import "./home.scss";
import About from "../../components/about/About";
import Hero from "../../components/hero/Hero";
import CardProject from "../../components/card project/CardProject";
import { dataProject } from "../../local data/dataProject";
import Button from "../../components/button/Button";
import Counter from "../../components/counter/Counter";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import LastComp from "../../components/last comp/LastComp";
const Home = () => {
  const handleClick = () => {
    setActiveLink(false);
    window.scrollTo({ top: 0, left: 0 });
  };
  const [data, setData] = useState(dataProject.slice(0, 2));
  const { setActiveLink } = useGlobalContext();
  return (
    <>
      <Hero />
      <About />
      {data.map((item) => {
        return <CardProject key={item.id} {...item} />;
      })}
      <div className="allProject section">
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleClick}
        >
          <Button text={"View All"} />
        </NavLink>
      </div>
      <Counter />
      <LastComp />
    </>
  );
};

export default Home;
