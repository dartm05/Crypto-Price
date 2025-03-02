import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? <FaSun className="w-6 h-6 text-yellow-500" /> : <FaMoon className="w-6 h-6 text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;