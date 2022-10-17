import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* ThemeProvider 안에 theme이라는 스타일 함께 적용 */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
