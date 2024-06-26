"use client";

import HomePage from "@/src/components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<DashboardPage />} /> */}
        <Route path="/" element={ <HomePage />} />\
      </Routes>
    </BrowserRouter>
  );
}
