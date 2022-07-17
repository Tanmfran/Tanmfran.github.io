import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Dashboard from "./app/Pages/dashboard/Dashboard";
import LokiZone from "./app/Pages/loki/LokiZone";

const AppRoutes = () => {
  return (
    <div className={"pageContent"}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/loki-zone" element={<LokiZone />} />
        <Route element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
