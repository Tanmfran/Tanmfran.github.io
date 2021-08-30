import React from "react";
import { NavList } from "./NavList";
import { Drawer } from "@material-ui/core";
import styles from "./LeftNav.module.scss";

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
