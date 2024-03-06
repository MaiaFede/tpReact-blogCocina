import React from "react";
import { Row, Modal, Container, Col, Button } from "react-bootstrap";

const ModalsCard = (props) => {
  const { recetaInicio } = props;
  return (
    <Modal {...props}  dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          {recetaInicio.nombreReceta}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container>
          <Row>
          <Col md={4} className="d-flex flex-column">
            <Col xs={12} md={2}>
              <h5> Ingredientes:</h5>
            </Col>
            <Col xs={6} md={10}>
              <ul>
              {recetaInicio.ingredientes.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
              </ul>
            </Col>
          </Col>

          <Col md={8} className="d-flex flex-column">
            <Col xs={6} md={2}>
            <h5>Instrucciones:</h5>
            </Col>
            <Col xs={6} md={10}>
              <ol>
              {recetaInicio.instrucciones.map((paso, index) => (
        <li key={index}>{paso}</li>
      ))}
              </ol>
            </Col>
          </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn btn-danger">Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalsCard;
