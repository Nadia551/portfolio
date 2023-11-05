import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ImageModal = ({ imageSrc }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const smallImageWidth = 300; // Set the width for the small image
  const smallImageHeight = 200; // Set the height for the small image

  const largeImageWidth = 1200; // Set the width for the large image
  const largeImageHeight = 800; // Set the height for the large image

  return (
    <div>
      <img
        src={imageSrc}
        alt="Small Image"
        onClick={handleOpenModal}
        style={{
          cursor: "pointer",
          width: smallImageWidth + "px",
          height: smallImageHeight + "px",
        }}
      />

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body>
          <img
            src={imageSrc}
            alt="Full Size Image"
            className="img-fluid"
            style={{
              width: largeImageWidth + "px",
              height: largeImageHeight + "px",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageModal;
