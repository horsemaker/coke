import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { COKE_THEME } from "../constants";

const ThemeContext = createContext();

const preferColorSchemeQuery = "(prefers-color-scheme: dark)";

const giveInitialTheme = () =>
  localStorage.getItem(COKE_THEME) ||
  (matchMedia(preferColorSchemeQuery).matches ? "dark" : "light");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(giveInitialTheme);

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  useEffect(() => {
    const mediaQuery = matchMedia(preferColorSchemeQuery);
    const handleColorSchemeChange = () =>
      setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleColorSchemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem(COKE_THEME, theme);
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
