import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("skillhub-theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("skillhub-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div data-theme={dark ? "dark" : "light"} className="app-shell">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
