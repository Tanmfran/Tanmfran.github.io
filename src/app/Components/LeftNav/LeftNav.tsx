import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./LeftNav.module.scss";
import NavItem from "./NavItem";

const LeftNav = () => {
  const location = useLocation();

  console.log(location);
  const routes = [
    {
      header: "Dashboard",
      path: "",
    },
    {
      header: "Loki Zone",
      path: "loki-zone",
    },
  ];

  return (
    <div className={styles.leftNav}>
      <ul className={styles.navItems}>
        <NavItem
          route={routes[0].path}
          label={routes[0].header}
          active={location.pathname === "/"}
        />
        <NavItem
          route={routes[1].path}
          label={routes[1].header}
          active={location.pathname === "/loki-zone"}
        />
      </ul>
    </div>
  );
};

export default LeftNav;
