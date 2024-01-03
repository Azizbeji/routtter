import React from "react";
import "./Navbar.css";

function Navbar({ toggleShow }) {
  return (
    <div className="Navbar">
      <img
        src="https://play-lh.googleusercontent.com/09V0Z-LB9y7-RA3yygmRdYaNtt-w1LExNEdctz7txCmIy11E_Z0ZCLDeUwwKYK5UXA"
        alt="Website Logo"
        height={"100%"}
      />

      <button onClick={toggleShow}>
        <span className="toShow">Add your film </span>
        <strong>+</strong>
      </button>
    </div>
  );
}

export default Navbar;
