import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import { routes } from "./app/constants/routes";

const AppRoutes = () => {
  return (
    <div className={"pageContent"}>
      <Routes>
        <>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<route.component />}
                key={route.header}
              />
            );
          })}
        </>
      </Routes>
    </div>
  );
};

export default AppRoutes;
