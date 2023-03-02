import React from "react";
import { useLocation } from "react-router";

function Compo({ id }: any) {
  const location = useLocation();
  return (
    <>
      <h2>Dinamic Routing :ID ={id}</h2>
      <h3>{location.pathname}</h3>
    </>
  );
}

export default Compo;
