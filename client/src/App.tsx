import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Router } from "./Routes";

export function App() {

  return (
    <ThemeContextProvider>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    </ThemeContextProvider>
  )
}
