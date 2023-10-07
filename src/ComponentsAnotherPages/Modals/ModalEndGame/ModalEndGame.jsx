import React from "react";
import { Button, Modal } from "react-bootstrap";

export const ModalEndGame = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.messageEndGame.head}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <p>{props.messageEndGame.body}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{width: '100%'}} size="lg" onClick={() => window.location.reload()}>
          Restart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
