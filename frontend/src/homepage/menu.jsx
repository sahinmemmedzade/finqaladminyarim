import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./menu.css";
import { RiLiveFill, RiCloseFill } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const items = [
    { text: "İlham Əliyevin Britaniya səfəri" },
    { text: "Avropa Siyasi Birliyi Sammiti - 2024" },
    { text: "Şəhid dəfni" },
    { text: "Parlament seçkisi - 2024" },
    { text: "Hava proqnozu" },
    { text: "Günün əsas xəbərləri" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // const toggleMenuClicked = () => {
  //   const menuContent = document.querySelector(".menu-content");
  //   menuContent.classList.add("menu-content-clicked");
  // };

  // Determine top value based on the current path
  const topPosition = location.pathname === "/home" ? "20px" : "0px";

  return (
    <div
      className={`menu-header ${sidebarOpen ? "opened" : ""}`}
      style={{ top: topPosition }} // Apply top value dynamically
    >
      <a href="/" className="logo">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"
          alt="Logo"
        />
      </a>
      <div className="menu-icon" onClick={toggleSidebar}>
        <IoIosMenu />
      </div>
      <div className="menu-content">
        <div className="close-icon" onClick={toggleSidebar}>
          <RiCloseFill />
        </div>
        {items.map((item, i) => (
          <div key={i} className="menu-item">
            <div className="menu-item-inner">
              <span className="item-text">{item.text}</span>
            </div>
          </div>
        ))}
        {sidebarOpen && (
          <div className="camera-icon-bottom">
            <RiLiveFill />
          </div>
        )}
        {!sidebarOpen && (
          <div className="camera-icon-near">
            <RiLiveFill />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
