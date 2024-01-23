import React, { createContext, useContext, useEffect, useState } from "react";

//@ts-ignore
const ThemeContext = createContext<any>(null);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");
    // already previously set in browser store.
    if (storageTheme && ["light", "dark"].includes(storageTheme)) {
      setTheme(storageTheme as "dark" | "light");
    } else {
      // try to automatically infer dark mode theme.
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        // default to light
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default useTheme;
