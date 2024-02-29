import React from 'react';
import { Col, Card, Button , Image, OverlayTrigger, Overlay} from "react-bootstrap";
import { Link } from "react-router-dom";
import banner_donut from "../../../assets/Donuts banner.png"
import ModalsCard from './ModalsCard';
import {useState} from "react";
import {BsChevronDoubleRight} from "react-icons/bs"

const CardReceta = ({recetaInicio}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col md={4} lg={3} className="mb-3">
         <Card  style={{ width: '20rem', heigth:"68rem" }} className="ms-3">
        
         <Card.Img src={recetaInicio.imagen} className="img-fluid img-card" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className="display-5 text-light">{recetaInicio.nombreReceta} </Card.Title>
       <Button variant="link" style={{border: "none", padding:0}} className="button-icon text-center"onClick={() => setModalShow(true)}> <BsChevronDoubleRight size={77}></BsChevronDoubleRight> </Button>
      </Card.ImgOverlay>

 <ModalsCard show={modalShow} onHide={() => setModalShow(false)} recetaInicio={recetaInicio}  />
</Card>
      </Col>
    );
};

export default CardReceta;