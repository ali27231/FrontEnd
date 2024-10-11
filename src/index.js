import React from "react";
import reactDom from "react-dom/client";
import App from "./App.js";
const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
