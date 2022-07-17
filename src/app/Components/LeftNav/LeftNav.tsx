import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./LeftNav.module.scss";
import NavItem from "./NavItem";

const LeftNav = () => {
  const location = useLocation();

  const routes = [
    {
      header: "Dashboard",
      path: "/",
    },
    {
      header: "Loki Zone",
      path: "loki-zone",
    },
    {
      header: "TBD",
      path: "/1",
    },
    {
      header: "TBD",
      path: "/2",
    },
    {
      header: "TBD",
      path: "/3",
    },
  ];

  return (
    <div className={styles.leftNav}>
      <ul className={styles.navItems}>
        {routes.map((route, index) => {
          return (
            <NavItem
              key={index}
              route={route.path}
              label={route.header}
              active={location.pathname === route.path}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default LeftNav;
