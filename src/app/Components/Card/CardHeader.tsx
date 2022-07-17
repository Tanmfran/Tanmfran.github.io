import React from "react";

import styles from "./Card.module.scss";

interface CardHeaderProps {
  text?: string;
  className?: string;
}

const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className={`${styles.cardHeader} ${props.className}`}>
      {props.text}
    </div>
  );
};

export default CardHeader;
