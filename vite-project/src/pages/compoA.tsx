import React from "react";
import { useLocation } from "react-router";

function Compo() {
  const location = useLocation();
  return (
    <>
      <h2>CompoA</h2>
      <h3>{location.pathname}</h3>
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </>
  );
}

export default Compo;
