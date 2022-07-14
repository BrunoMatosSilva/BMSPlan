import { useCallback } from "react";
import { useTheme } from "../../hooks/useTheme"

export function Header(){
  const {currentTheme ,setCurrentTheme} = useTheme();

  const getOppositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return(
    <div>
    <h1>Bms Plan</h1>
    <button onClick={() => setCurrentTheme(getOppositeTheme())}>Mudar Tema do Layout</button>
    </div>
  )
}