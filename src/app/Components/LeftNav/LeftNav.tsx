import React from "react";
import { NavItem } from "./NavItem";

export const LeftNav = () => {
  const routes = [
    {
      header: "Dashboard",
      path: "",
    },
    {
      header: "Cool Shit",
      path: "cool-shit",
    },
    {
      header: "Jakes house",
      path: "shit-shack",
    },
  ];

  return (
    <nav>
      {routes.map((route) => (
        <NavItem header={route.header} path={route.path} key={route.header} />
      ))}
    </nav>
  );
};
