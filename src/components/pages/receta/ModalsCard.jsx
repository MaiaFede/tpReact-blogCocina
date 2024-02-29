import React from "react";
import { Row, Modal, Container, Col, Button } from "react-bootstrap";

const ModalsCard = (props) => {
  return (
    <Modal {...props}  dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Cupcake Ferrero
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container>
          <Row>
          <Col className="d-flex flex-column">
            <Col xs={12} md={8}>
              <h5> Ingredientes:</h5>
            </Col>
            <Col xs={6} md={4}>
              <ul>
                <li>Chocolate</li>
                <li>Leche</li>
              </ul>
            </Col>
          </Col>

          <Col className="d-flex flex-column">
            <Col xs={6} md={4}>
            <h5>Receta:</h5>
            </Col>
            <Col xs={6} md={4}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nam.</p>
            </Col>
          </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalsCard;
