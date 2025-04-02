"use client"; 

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a saved theme in localStorage
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme === "enabled") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-dark ms-3"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
