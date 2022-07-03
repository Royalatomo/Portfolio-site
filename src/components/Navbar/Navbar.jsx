import React from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navItems = ["home", "about", "work", "skills", "testimonials", "contact"];

const Navbar = ({inHome}) => {
  const toggleNavBar = () => {
    const navBar = document.querySelector(".app__navbar-motion");
    if (!navBar) {
      return;
    }
    navBar.classList.toggle("active");
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="https://ik.imagekit.io/imdfhuoko/Portfolio/logo_Z9KpS8uUu.png?tr=h-40" alt="" />
      </div>

      <ul className="app__navbar-links">
        {navItems.map((item, index) => {
          return (
            <li key={`link-${index}`} className="app__flex p-text">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={toggleNavBar} />

        <motion.div
          className="app__navbar-motion"
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <HiX onClick={toggleNavBar} />
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={toggleNavBar}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
