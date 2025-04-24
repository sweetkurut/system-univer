import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import Deals from "./pages/Deals/Deals.jsx";
import Report from "./pages/Report/Report.jsx";
import BoardPage from "./pages/Board/BoardPage.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            {/* <App /> */}
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/calendar" element={<Deals />} /> */}
                <Route path="/report" element={<Report />} />
                <Route path="/board" element={<BoardPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
