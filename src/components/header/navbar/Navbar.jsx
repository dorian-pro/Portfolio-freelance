import React, { useState, useEffect } from "react";
import Logo from "../../../assets/images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isSticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Dorian Maréchal" />
        </div>
        <div className="btn-mobile">
          <div className="container">
            <button
              className={`btn ${isOpen ? "open" : ""}`}
              onClick={toggleOpen}
            >
              <span className="line"></span>
            </button>
          </div>
        </div>
        <nav className={`nav ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                à propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#prestation">
                prestation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
