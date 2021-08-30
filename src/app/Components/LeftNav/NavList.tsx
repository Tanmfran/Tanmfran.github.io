import React from "react";
import { Link } from "react-router-dom";
import styles from "./LeftNav.module.scss";
import { Button, IconButton, List, ListItem } from "@material-ui/core";
import { motion } from "framer-motion";

export const NavList = () => {
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
    <List className={styles.navList} style={{ padding: 0 }}>
      {routes.map((route) => (
        <ListItem key={route.header} className={styles.leftNavItem}>
          <Button
            key={route.header}
            component={motion.div}
            whileTap={{ scale: 2 }}
            whileHover={{ scale: 1.4, transition: { duration: 0.3 } }}
            style={{ padding: 8 }}
          >
            <Link to={`/${route.path}`}>{route.header}</Link>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
