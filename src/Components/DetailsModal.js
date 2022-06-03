import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DetailsModal = ({ show, setShow, details }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <h3>Details</h3>
      </Modal.Header>
      <Modal.Body>{details}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} variant="info">
          Cancel
        </Button>
        <Button variant="primary">Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
