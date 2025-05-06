import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/routes/routes.jsx";
import GlobalStyle from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter basename="/Driele_DevMovies">
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
