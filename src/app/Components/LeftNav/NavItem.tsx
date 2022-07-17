import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import styles from "./LeftNav.module.scss";

interface NavItemProps {
  route?: string;
  label: string;
  active?: boolean;
}

const NavItem = (props: NavItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.route) {
      navigate(props.route);
    }
  };

  const className = props.active
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem;

  return (
    <Button onClick={handleClick} className={className}>
      {props.label}
    </Button>
  );
};

export default NavItem;
