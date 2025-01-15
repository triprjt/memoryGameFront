import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CreateUserPage from "./pages/CreateUserPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/createUser" element={<CreateUserPage />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>
);
