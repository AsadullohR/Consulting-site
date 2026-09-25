import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ThankYou from "./ThankYou";
import ContractPage from "./pages/ContractPage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/contract" element={<ContractPage />} />
    </Routes>
  </BrowserRouter>
);
