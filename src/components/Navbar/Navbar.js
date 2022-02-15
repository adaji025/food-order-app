import React, { useState } from "react";
import { Link } from "react-router-dom";
import Close from "../../assets/togglerClose.svg";
import Open from "../../assets/togglerOpen.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="navbarItems">
        <h2 className="logo">food.com</h2>
        <div className="menuIcon" onClick={handleClick}>
          {isOpen ? <img src={Close} alt="" /> : <img src={Open} alt="" />}
        </div>
        <div className={isOpen ? "menu-items active" : "menu-items"}>
          <Link to="/">
            <span className="navLink">home</span>
          </Link>
          <Link to="/menu">
            <span className="navLink">Menu</span>
          </Link>
          <Link to="/about">
            <span className="navLink">About</span>
          </Link>
          <Link to="/contact">
            <span className="navLink">Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
