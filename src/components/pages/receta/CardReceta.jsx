import React from 'react';
import { Col, Card, Button , Image, OverlayTrigger, Overlay} from "react-bootstrap";
import { Link } from "react-router-dom";
import banner_donut from "../../../assets/Donuts banner.png"
import ModalsCard from './ModalsCard';
import {useState} from "react";
import {BsChevronDoubleRight} from "react-icons/bs"

const CardReceta = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Col md={4} lg={3} className="mb-3">
         <Card  style={{ width: '20rem', heigth:"68rem" }} className="">
        
         <Card.Img src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="img-fluid img-card" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className="display-4 text-light">Cupcake Ferrero </Card.Title>
       <Button variant="link" style={{border: "none", padding:0}} className="button-icon text-center"onClick={() => setModalShow(true)}> <BsChevronDoubleRight size={57}></BsChevronDoubleRight> </Button>
      </Card.ImgOverlay>
      <ModalsCard show={modalShow} onHide={() => setModalShow(false)} />
</Card>
      </Col>
    );
};

export default CardReceta;