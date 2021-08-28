import React from "react";
import { Link } from "react-router-dom";
import styles from "./LeftNav.module.scss";
import { Button, IconButton, List, ListItem } from "@material-ui/core";

export const NavList = () => {
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
    <List className={styles.navList}>
      {routes.map((route) => (
        <ListItem key={route.header} className={styles.leftNavItem}>
          <Button key={route.header}>
            <Link to={`/${route.path}`}>{route.header}</Link>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
