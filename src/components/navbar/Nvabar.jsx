import React, { useEffect } from "react";
import "./navbar.scss";
import { NavLink, Link } from "react-router-dom";
import Button from "../button/Button";
import { useGlobalContext } from "../../context";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Nvabar = () => {
  const { activeLink, setActiveLink, navOpen, setNavOpen } = useGlobalContext();
  if (window.location.href === window.location.origin + "/") {
    setActiveLink(true);
  }
  useEffect(() => {
    localStorage.setItem("active", activeLink);
  }, [activeLink]);

  const handleClickFalse = () => {
    setActiveLink(false);
    setNavOpen(false);

    window.scrollTo({ top: 0, left: 0 });
  };

  const handleClickTrue = () => {
    setActiveLink(true);
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className="navbar section">
      <div className="navbar__logo">
        <NavLink to="/">
          <h1 onClick={handleClickTrue}>B Miloud</h1>
        </NavLink>
      </div>
      <div className={navOpen ? `navbar__links openNav` : `navbar__links`}>
        <ul>
          <li onClick={() => setNavOpen(false)}>
            <Link
              to="/"
              className={`${activeLink ? "active" : ""}`}
              onClick={handleClickTrue}
            >
              Home
            </Link>
          </li>

          <li onClick={handleClickFalse}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleClickFalse}
            >
              Portfolio
            </NavLink>
          </li>
          <li onClick={handleClickFalse}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleClickFalse}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar__btn" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? (
          <AiOutlineCloseCircle className="close" />
        ) : (
          <AiOutlineMenu />
        )}
      </div>
      <div className="navbar__btn-contact">
        <Link onClick={handleClickFalse} to="/contact">
          <Button text={"Contact Me"} />
        </Link>
      </div>
    </div>
  );
};

export default Nvabar;
