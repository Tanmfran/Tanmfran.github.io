import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./IconHolder.module.scss";

interface IconHolderProps {
  icon?: {
    src: string;
    alt: string;
  };
  text: string;
}

const ANIMATION_DURATION_S = 0.8;

const getVariants = (direction: string) => ({
  initial: {
    y: direction === "top" ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});

export const IconHolder = (props: IconHolderProps) => {
  const [wobble, setWobble] = React.useState(0);

  const handleClick = () => {
    setWobble(1);
  };

  const handleWobbleEnd = () => {
    setWobble(0);
  };

  return (
    <div className="icon-holder">
      <AnimatePresence>
        <motion.div
          className="icon-holder__icon"
          key={props.text + "icon"}
          variants={getVariants("top")}
          initial={"initial"}
          exit={"initial"}
          animate={"animate"}
        >
          {props.icon && (
            <img
              className={styles.image}
              src={props.icon.src}
              alt={props.icon.alt}
            />
          )}
        </motion.div>
        <motion.div
          className={styles.shakeText}
          key={props.text}
          variants={getVariants("bottom")}
          initial={"initial"}
          exit={"initial"}
          animate={"animate"}
        >
          <span
            className={wobble ? styles.imageWobbleActive : styles.imageWobble}
            onClick={handleClick}
            onAnimationEnd={handleWobbleEnd}
          >
            {props.text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
