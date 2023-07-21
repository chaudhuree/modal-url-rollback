import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    // Save the current URL to revert back to it later
    window.history.pushState(null, null, window.location.pathname);
    // Update the URL to the new one for the modal
    window.history.pushState(null, null, "/modal");
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // revert back to the previous url
    window.history.back();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    // revert back to the previous url
    window.history.back();
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </Modal>
    </>
  );
}
