import React from "react";

export default function Navbar() {
  return (
    <header>
      <a href="/">
        <img
          className="logo"
          src="Logo1-01cropped.png"
          alt="logo"
          height={50}
        />
      </a>
      <h1>Shess</h1>
      <img className="hamburger" src="hamburger.png" alt="" />
    </header>
  );
}
