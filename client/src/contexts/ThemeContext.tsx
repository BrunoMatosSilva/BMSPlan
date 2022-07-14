import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
  currentTheme: Theme;
  setCurrentTheme: (currentTheme: Theme) => void;
}

type ThemeContextProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
const [currentTheme, setCurrentTheme] = useState<Theme>(localStorage.getItem("theme") !== "dark" ? "light" : "dark");

useEffect(() => {
  const root = window.document.documentElement;

  const removeOldTheme = currentTheme === "dark" ? "light" : "dark";

  root.classList.remove(removeOldTheme);
  root.classList.add(currentTheme);
  localStorage.setItem("theme", currentTheme);
}, [currentTheme]);


return (
  <ThemeContext.Provider value={{ currentTheme, setCurrentTheme}}>
      {children}
  </ThemeContext.Provider>
);

}