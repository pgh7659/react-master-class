import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";

const darkTheme = {
  backgroundColor: "black",
  fontColor: "whitesmoke",
  borderColor: "whitesmoke",
  inputBackgroundColor: "black",
};

const lightTheme = {
  backgroundColor: "whitesmoke",
  fontColor: "black",
  borderColor: "black",
  inputBackgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
