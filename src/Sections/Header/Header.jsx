import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/royal-logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import SideBar from "./SideBar";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const nav_items = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Ventures",
      path: "#ventures",
    },
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Location",
      path: "#location",
    },
    {
      name: "Gallery",
      path: "#gallery",
    },
  ];
  return (
    <div className="header">
      <div className="header__logo-container">
        <img src={logo} alt="logo" />
      </div>

      <div className="header__nav-container">
        <ul>
          {nav_items.map((item) => {
            return (
              <a key={item.name} href={item.path}>
                <li>{item.name}</li>
              </a>
            );
          })}
        </ul>
      </div>

      <div className="header__button-container">
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="tel:7013618629"
        >
          <button className="header__button">Call Now</button>
        </a>
        <img
          onClick={() => {
            setMenuActive(!menuActive);
          }}
          src={menuActive ? close : menu}
          alt="menu"
        />
      </div>
      {menuActive ? <SideBar /> : null}
    </div>
  );
}

export default Header;
