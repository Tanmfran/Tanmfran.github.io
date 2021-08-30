import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "./LokiZone.module.scss";
import Modal, { Styles } from "react-modal";
import { useHistory } from "react-router-dom";

interface LokiModalProps {
  isVisible: boolean;
  closeModal: () => void;
}

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

const customStyles = {
  overlay: {
    position: undefined,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  content: {},
};

export const LokiModal = (props: LokiModalProps) => {
  const history = useHistory();

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
        if (goBack) history.push("/");
      }}
      className={styles.lokiModal}
      portalClassName={styles.lokiModal}
      ariaHideApp={false}
      style={customStyles as Styles}
    >
      <motion.div
        key="modal"
        className="icon-holder__icon"
        variants={getVariants("top")}
        initial={"initial"}
        exit={{ opacity: 0 }}
        animate={"animate"}
      >
        <Card className={styles.lokiCard} variant={"elevation"}>
          <ButtonGroup>
            <Button
              component={motion.div}
              whileTap={{ scale: 2 }}
              whileHover={{ scale: 1.4, transition: { duration: 0.3 } }}
              style={{ padding: 8 }}
              onClick={props.closeModal}
            >
              Heckers Yes
            </Button>
            <Button
              onClick={sendMeHome}
              component={motion.div}
              whileTap={{ scale: 2 }}
              whileHover={{ scale: 1.4, transition: { duration: 0.3 } }}
              style={{ padding: 8 }}
            >
              No, send me back!
            </Button>
          </ButtonGroup>
        </Card>
      </motion.div>
    </Modal>
  );
};
