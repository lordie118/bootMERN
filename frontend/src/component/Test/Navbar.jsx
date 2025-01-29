import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Menu } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabLabels = [
    "Accueil",
    "À Propos",
    "Services",
    "Formation",
    "Ressources",
    "Actualités",
    "Événements",
    "Adhésion",
    "Nous Trouver",
    "Contact",
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
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } shadow-md`}
      >
        <nav className="flex items-center h-16 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="src/assets/logo.png" // Single logo
              alt="Logo"
              className="h-8 w-auto md:h-12 lg:h-14"
            />
          </div>

          {/* Tabs for Laptops and Larger Screens */}
          <div className="hidden lg:flex ml-auto items-center">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="Navigation Tabs"
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: "2px", // Reduce space between tabs
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: darkMode ? "#FFC107" : "#FFC107",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  minWidth: "auto", // Remove default minWidth
                  padding: "0 12px", // Adjust padding to reduce size
                  color: darkMode
                    ? "rgba(245, 245, 245, 0.8)" // Secondary color in dark mode
                    : "rgba(0, 0, 0, 0.6)",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: darkMode ? "#FFC107" : "#FFC107",
                },
              }}
            >
              {tabLabels.map((label, index) => (
                <Tab key={index} label={label} />
              ))}
            </Tabs>

            {/* Espace Client Button */}
            <button className="bg-primary text-black font-medium px-4 py-2 rounded-full shadow hover:bg-yellow-600 transition duration-300 ml-4">
              Espace Client
            </button>

            {/* Dark Mode Toggle */}
            <div
              onClick={toggleDarkMode}
              className="cursor-pointer flex items-center justify-center ml-4"
            >
              {darkMode ? (
                <LightModeIcon
                  sx={{ color: "#FFC107", fontSize: "1.8rem" }}
                />
              ) : (
                <DarkModeIcon
                  sx={{ color: "black", fontSize: "1.8rem" }}
                />
              )}
            </div>
          </div>

          {/* Hamburger Menu for Tablets and Mobile */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none flex items-center justify-center"
            >
              <Menu
                fontSize="large"
                sx={{
                  color: darkMode ? "#f5f5f5" : "black", // Dynamic Menu icon color
                }}
              />
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
              {tabLabels.map((label, index) => (
                <div
                  key={index}
                  className={`py-2 cursor-pointer text-center w-full ${
                    activeTab === index ? "font-semibold" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(index);
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </div>
              ))}

              {/* Dark Mode Toggle */}
              <div
                onClick={toggleDarkMode}
                className="cursor-pointer flex items-center justify-center mt-4"
              >
                {darkMode ? (
                  <LightModeIcon
                    sx={{ color: "#FFC107", fontSize: "1.8rem" }}
                  />
                ) : (
                  <DarkModeIcon
                    sx={{ color: "black", fontSize: "1.8rem" }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
