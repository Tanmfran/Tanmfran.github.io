import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
