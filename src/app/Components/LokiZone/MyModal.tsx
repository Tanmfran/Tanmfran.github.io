import React from "react";
import { Button } from "@material-ui/core";
import styles from "./LokiZone.module.scss";
import { Modal } from "react-bootstrap";

export const MyModal = (props: any) => {
  const handleClose = () => {
    props.closeModal();
  };

  return (
    <>
      <Modal
        show={props.isVisible}
        onHide={handleClose}
        centered
        fullscreen
        dialogClassName={styles.lokiModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
