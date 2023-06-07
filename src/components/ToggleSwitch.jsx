import { useEffect, useState } from "react";

export const ToggleSwitch = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  const handleThemeChange = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="emoji-toggle emoji-mode">
      <input type="checkbox" onChange={handleThemeChange} className="toggle" />
      <div className="emoji" style={{ fontSize: 40 }}>
        {theme === "light" ? "☀️" : "🌃"}
      </div>
    </div>
  );
};
