import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/routes/routes.jsx";
import GlobalStyles from './styles/GlobalStyles.js'
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Driele_DevMovies">
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>
);
