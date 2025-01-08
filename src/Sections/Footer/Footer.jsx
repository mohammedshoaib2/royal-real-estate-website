import React from "react";
import "./Footer.css";
import logo from "../../assets/royal-logo.png";
import phone from "../../assets/phone-solid.svg";

function Footer() {
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
      name: "What we do",
      path: "#whatwedo",
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
    <div className="footer">
      <div className="footer__main">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="footer__nav-items">
          {nav_items.map((item) => {
            return (
              <a key={`footer${item.name}`} href={item.path}>
                <li>{item.name}</li>
              </a>
            );
          })}
        </ul>

        <div className="footer__contact">
          <img src={phone} alt="phone" height={"20px"} width={"20px"} />
          <a href="tel:7013618629">
            <p>+91 7013618629</p>
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p> &#169; 2025 Royal Real Estates and Developer</p>
      </div>
    </div>
  );
}

export default Footer;
