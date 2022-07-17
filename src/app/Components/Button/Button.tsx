import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const className = props.className ? props.className : styles.button;

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
