import React from "react";
import {
  Backdrop,
  Button,
  ButtonGroup,
  Card,
  Fade,
  Modal,
  Slide,
} from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./LokiZone.module.scss";
import ReactModal from "react-modal";
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

export const LokiModal = (props: LokiModalProps) => {
  const history = useHistory();

  const sendMeHome = () => {
    props.closeModal();
    history.push("/");
  };

  return (
    <Modal
      open={props.isVisible}
      onClose={props.closeModal}
      closeAfterTransition={true}
      className={styles.lokiModal}
    >
      <motion.div
        key="modal"
        className="icon-holder__icon"
        variants={getVariants("top")}
        initial={"initial"}
        exit={{ opacity: 0 }}
        animate={"animate"}
      >
        <Card className={styles.lokiModal} variant={"elevation"}>
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
