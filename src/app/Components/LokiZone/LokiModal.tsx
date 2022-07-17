import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LokiZone.module.scss";

const ANIMATION_DURATION_S = 1;

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

interface LokiModalProps {
  isVisible: boolean;
  closeModal: () => void;
  setShowLokis: () => void;
}

export const LokiModal = (props: LokiModalProps) => {
  const navigate = useNavigate();

  const sendMeHome = () => {
    navigate("/");
  };

  return (
    <>
      {props.isVisible && (
        <motion.div
          key="modal"
          variants={getVariants("top")}
          initial={"initial"}
          exit={{ opacity: 0 }}
          animate={"animate"}
          className={styles.modal}
        >
          <div className={styles.lokiCard}>
            <div>
              <button onClick={props.setShowLokis}>Heckers Yes</button>
              <button onClick={sendMeHome}>No, send me back!</button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
