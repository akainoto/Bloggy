import React, { useState } from 'react';
import { Nav, Button, Modal } from 'react-bootstrap';
import mapImage from '../../img/mapImage.png';

function MapModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Map</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Input Reference Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={mapImage}
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
          <h4>RECOMMENDED DIMENESIONS:</h4>
          <p>
            <strong>Product Image:</strong>350 (height) x 450 (width)
          </p>
          <p>
            <i>
              These are general guidelines as some images display in vertical
              box form, and some in a wider style layout.
            </i>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MapModal;
