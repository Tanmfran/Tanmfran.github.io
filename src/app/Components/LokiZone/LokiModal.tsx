import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
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

  const [goBack, setGoBack] = useState(false);

  const sendMeHome = () => {
    setGoBack(true);
  };

  useEffect(() => {
    if (goBack) {
      props.closeModal();
    }
  }, [goBack, props]);

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={props.isVisible}
      onAfterClose={() => {
        if (goBack) navigate("/");
      }}
      className={styles.lokiModal}
      portalClassName={styles.lokiModal}
      ariaHideApp={false}
    >
      <motion.div
        key="modal"
        className="icon-holder__icon"
        variants={getVariants("top")}
        initial={"initial"}
        exit={{ opacity: 0 }}
        animate={"animate"}
      >
        <div className={styles.lokiCard}>
          <div>
            <button onClick={props.setShowLokis}>Heckers Yes</button>
            <button onClick={sendMeHome}>No, send me back!</button>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};
