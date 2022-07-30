import React from "react";
import { useLocation } from "react-router-dom";

import { routes } from "../../constants/routes";

import styles from "./LeftNav.module.scss";
import NavItem from "./NavItem";

const LeftNav = () => {
  const location = useLocation();

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
