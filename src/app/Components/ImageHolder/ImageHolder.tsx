import React from "react";
import { motion } from "framer-motion";
import styles from "./ImageHolder.module.scss";

interface ImageHolderProps {
  img: {
    src: string;
    alt?: string;
  };
  className?: string;
  type?: string;
}

const TRANSITION_TIME_OPACITY_S = 5;
const TRANSITION_TIME_ROTATE_S = 1;

export const ImageHolder = (props: ImageHolderProps) => {
  if (props.type === "rotate") {
    return (
      <div className={props.className ? props.className : undefined}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [-6, 0, 6] }}
          transition={{
            duration: TRANSITION_TIME_OPACITY_S,
            rotate: { yoyo: Infinity, duration: TRANSITION_TIME_ROTATE_S },
          }}
        >
          <img src={props.img.src} alt={props.img.alt} />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: [-6, 0, 6] }}
      className={props.className ? props.className : undefined}
    >
      <img src={props.img.src} alt={props.img.alt} />
    </motion.div>
  );
};

export default ImageHolder;
