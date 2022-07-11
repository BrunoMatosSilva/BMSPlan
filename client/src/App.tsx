import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

export function App() {

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  </ThemeProvider>
  )
}
