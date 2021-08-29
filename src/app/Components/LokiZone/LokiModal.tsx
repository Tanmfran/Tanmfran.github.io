import React from "react";
import {
  Backdrop,
  Button,
  ButtonGroup,
  Card,
  Fade,
  Slide,
} from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./LokiZone.module.scss";
import Modal, { Styles } from "react-modal";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

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

  const sendMeHome = () => {
    props.closeModal();
  };

  return (
    <Modal
      closeTimeoutMS={300}
      isOpen={props.isVisible}
      onRequestClose={props.closeModal}
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
              onClick={props.closeModal}
              component={motion.div}
              whileTap={{ scale: 2 }}
              whileHover={{ scale: 1.4, transition: { duration: 0.3 } }}
              style={{ padding: 8 }}
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
