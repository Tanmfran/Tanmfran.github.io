import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LeftNav.module.scss";

const LeftNav = () => {
  const navigate = useNavigate();

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

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className={styles.leftNav}>
      <div className={styles.navItems}>
        <button onClick={() => handleClick(routes[0].path)}>
          <div slot="start" />
          <div>Home</div>
        </button>
        <button onClick={() => handleClick(routes[1].path)}>
          <div slot="start" />
          <div>Loki Zone</div>
        </button>
      </div>
    </div>
  );
};

export default LeftNav;
