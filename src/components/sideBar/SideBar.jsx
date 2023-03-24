import React from "react";
import "./sideBar.css";
import { useState } from "react";

const SideBar = ({ Logo, Menu, Close }) => {

  const [toggle, setToggle] = useState(false)

  const toggleMenu = ()=>{
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <nav>
        <Logo />
        <button onClick={toggleMenu}>
          <Menu />
        </button>
      </nav>
      <div className={toggle ? "mobile-sideBar" : "mobile-sideBar-active"}>
        <button className="close-btn" onClick={toggleMenu} >
          <Close />
        </button>
        <div className="links">
          <a href="">Home</a>
          <a href="">New</a>
          <a href="">Popular</a>
          <a href="">Trending</a>
          <a href="">Categories</a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
