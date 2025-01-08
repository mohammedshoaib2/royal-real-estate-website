import React from "react";

function SideBar() {
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
    <div className="sidebar">
      {nav_items.map((item) => {
        return (
          <a key={`res${item.name}`} href={item.path}>
            <li>{item.name}</li>
          </a>
        );
      })}
    </div>
  );
}

export default SideBar;
