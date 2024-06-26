import React from "react";
import Home from "../Components/Home/Home";
import Discover from "../../Components/Discover/Discover.jsx";
import Recommended from "../../Components/Recommended/Recommended";

export const Main = () => {
  return (
    <>
      <Home />
      <Discover />
      <Recommended />
    </>
  );
};
