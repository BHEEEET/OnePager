import React from "react";

export default function Navbar() {
  return (
    <header>
      <a href="/">
        <img
          className="logo"
          src="Logo1-01cropped.png"
          alt="logo"
          height={40}
        />
        <h1>Shess</h1>
      </a>
      <img className="hamburger" src="icons/list.svg" alt="" />
    </header>
  );
}
