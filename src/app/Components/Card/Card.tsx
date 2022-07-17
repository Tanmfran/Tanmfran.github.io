import React from "react";

import styles from "./Card.module.scss";

interface CardProps {
  children?: React.ReactNode;
  header?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>{props.children}</div>
    </div>
  );
};

export default Card;
