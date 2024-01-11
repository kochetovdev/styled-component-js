import { Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Button } from "./common/Button";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";
import { lightTheme } from "../thems/lights";
import { darkTheme } from "../thems/Dark";

const GlobalSyles = createGlobalStyle`
  body {
    background: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(p) => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((prevState) =>
            prevState.id === "light" ? darkTheme : lightTheme
          );
        },
      }}
    >
      <GlobalSyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
