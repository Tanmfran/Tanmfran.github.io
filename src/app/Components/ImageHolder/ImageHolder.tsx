import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface ImageHolderProps {
  img: {
    src: string;
    alt?: string;
  };
  className?: string;
  type?: string;
  style?: any;
}

const TRANSITION_TIME_OPACITY_S = 4;
const TRANSITION_TIME_ROTATE_S = 0.5;

export const ImageHolder = (props: ImageHolderProps) => {
  if (props.type === "rotate") {
    return (
      <div
        className={props.className ? props.className : undefined}
        style={props.style ? props.style : undefined}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ rotate: 1080, opacity: 1 }}
          transition={{
            // duration: TRANSITION_TIME_OPACITY_S,
            rotate: { repeat: Infinity, duration: 10 },
          }}
        >
          <img src={props.img.src} alt={props.img.alt} />
        </motion.div>
      </div>
    );
  }

  if (props.type === "infiniteRotate") {
    return (
      <div
        className={props.className ? props.className : undefined}
        style={props.style ? props.style : undefined}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ rotate: 3000, opacity: 1 }}
          transition={{
            // duration: TRANSITION_TIME_OPACITY_S,
            rotate: { repeat: Infinity, duration: 50 },
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
      animate={{ opacity: 1, rotate: [-6, 6] }}
      transition={{
        duration: TRANSITION_TIME_OPACITY_S,
      }}
      className={props.className ? props.className : undefined}
    >
      <img src={props.img.src} alt={props.img.alt} />
    </motion.div>
  );
};

export default ImageHolder;
