import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("darkBody");
    document.querySelector(".nav").classList.toggle("navDark");
    document.querySelector(".filter").classList.toggle("filterDark");
    document.querySelector(".list").classList.toggle("listDark");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  return (
    <div className="nav d-flex p-20">
      <Link to="/">
        <h2>Where in the world?</h2>
      </Link>

      <p
        onClick={toggleTheme}
        style={{
          color: theme === "light" ? "black" : "white",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          style={{ marginRight: "5px" }}
        />
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </p>
    </div>
  );
}
