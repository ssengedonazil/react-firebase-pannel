import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddUserModal({ show, onClose, onAdd }) {
  const [formData, setformData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = () => {
    const name = formData.name, email = formData.email, password = formData.email;
    if (name.trim() && email.trim()) {
      onAdd({ Password: password, Email: email, Name: name });
      setformData({ name: "", email: "" });
      onClose();
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              value={formData?.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formData?.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formPwd" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Pwd"
              placeholder="Enter password"
              value={formData?.password}
              onChange={(e) =>
                setformData({ ...formData, password: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
