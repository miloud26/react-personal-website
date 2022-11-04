import React, { useEffect } from "react";
import { useContext, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const value = () => {
    if (localStorage.getItem("active")) {
      return localStorage.getItem("active");
    }
    return true;
  };
  const [activeLink, setActiveLink] = useState(
    useEffect(() => {
      value();
    }, [])
  );
  const [navOpen, setNavOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        navOpen,
        activeLink,
        setNavOpen,
        setActiveLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
