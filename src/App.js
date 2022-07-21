import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    setDarkMode(true);
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setDarkMode(false);
  };

  const toggleTheme = () => {
    if (darkMode) {
      setLight();
    } else {
      setDark();
    }
  };

  // On mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
      storedTheme === "dark" || (storedTheme === null && prefersDark);

    if (defaultDark) {
      setDark();
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
