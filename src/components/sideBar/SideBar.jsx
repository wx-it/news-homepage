import React from "react";
import "./sideBar.css";

const SideBar = ({ Logo, Menu, Close }) => {
  return (
    <>
      <nav>
        <Logo />
        <button>
          <Menu />
        </button>
      </nav>
      <div className="mobile-sideBar">
        <button>
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
