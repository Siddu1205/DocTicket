import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { browerRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <browerRouter>
    <App />
  </browerRouter>
);
