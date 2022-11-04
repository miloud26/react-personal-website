import React from "react";
import "./error.scss";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
const Error = () => {
  const { setActiveLink } = useGlobalContext();
  return (
    <div className="error section">
      <div className="error__content">
        <h1>Page Not Found </h1>
        <div>
          <Link to="/" onClick={() => setActiveLink(true)}>
            <Button text={"Back To Home"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
