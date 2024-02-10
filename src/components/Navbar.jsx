import React from "react";
import reactLogo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="nav--left-text">
        <img src={reactLogo} alt="React logo" width="30px" />
        ReactFacts
      </div>
      <div className="nav--right-text">React Course - Project 1</div>
    </nav>
  );
}
