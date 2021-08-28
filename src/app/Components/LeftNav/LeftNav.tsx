import React from "react";
import { NavList } from "./NavList";
import { AppBar, Drawer, IconButton, List, Toolbar } from "@material-ui/core";
import styles from "./LeftNav.module.scss";
import { Link } from "react-router-dom";

export const LeftNav = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer variant={"permanent"} className={styles.drawer}>
        <NavList />
      </Drawer>
    </>
  );
};
