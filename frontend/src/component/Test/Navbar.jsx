import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Menu } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { label: "Presentation", path: "/pp" },
    { label: "Legals", path: "/legals" },
    { label: "Ressources", path: "/ressources" },
    { label: "Contact", path: "/contact" },
    { label: "Services", path: "/services" },
    { label: "Formation", path: "/formation" },
    { label: "Actualités", path: "/actualites" },
    { label: "Événements", path: "/evenements" },
    { label: "Adhésion", path: "/adhesion" },
    { label: "Nous Trouver", path: "/nous-trouver" },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } shadow-md`}
    >
      <nav className="flex items-center h-16 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center rounded-3xl p-2 bg-primary">
          <img
            src="./1.png"
            alt="Logo"
            className="h-8 w-auto md:h-12 rounded-3xl lg:h-14"
          />
        </div>

        {/* Tabs for Desktop */}
        <div className="hidden lg:flex ml-auto items-center">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="Navigation Tabs"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#FFC107",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                minWidth: "auto",
                padding: "0 12px",
                color: darkMode ? "rgba(245, 245, 245, 0.8)" : "rgba(0, 0, 0, 0.6)",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#FFC107",
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} component={Link} to={tab.path} />
            ))}
          </Tabs>

          {/* Espace Client Button */}
          <Link to="/espace-client">
            <button className="bg-primary text-black font-medium px-4 py-2 rounded-full shadow hover:bg-yellow-600 transition duration-300 ml-4">
              Espace Client
            </button>
          </Link>

          {/* Dark Mode Toggle */}
          <div
            onClick={toggleDarkMode}
            className="cursor-pointer flex items-center justify-center ml-4"
          >
            {darkMode ? (
              <LightModeIcon sx={{ color: "#FFC107", fontSize: "1.8rem" }} />
            ) : (
              <DarkModeIcon sx={{ color: "black", fontSize: "1.8rem" }} />
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <Menu fontSize="large" sx={{ color: darkMode ? "#f5f5f5" : "black" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full p-4 ${
            darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.path}
                className="py-2 w-full text-center cursor-pointer"
                onClick={() => {
                  setActiveTab(index);
                  setMenuOpen(false);
                }}
              >
                {tab.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <div onClick={toggleDarkMode} className="cursor-pointer flex items-center justify-center mt-4">
              {darkMode ? (
                <LightModeIcon sx={{ color: "#FFC107", fontSize: "1.8rem" }} />
              ) : (
                <DarkModeIcon sx={{ color: "black", fontSize: "1.8rem" }} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
