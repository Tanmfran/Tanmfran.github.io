import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Dashboard from "./app/Components/Dashboard/Dashboard";
import LokiZone from "./app/Components/LokiZone/LokiZone";

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
