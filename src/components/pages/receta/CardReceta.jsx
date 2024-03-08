import React from 'react';
import { Col, Card, Button } from "react-bootstrap";
import ModalsCard from './ModalsCard';
import {useState} from "react";
import {BsChevronDoubleRight} from "react-icons/bs";


const CardReceta = ({receta}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col md={4} lg={3} className="mb-3">
         <Card  style={{ width: '20rem', heigth:"68rem" }} className="position-relative">
        
         <Card.Img src={receta.imagen} className="img-card" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className="display-5 text-light">{receta.nombreReceta} </Card.Title>
       <Button variant="link" style={{border: "none", padding:0}} className="button-icon position-absolute bottom-0 start-50 translate-middle-x mb-3 "onClick={() => setModalShow(true)}> <BsChevronDoubleRight size={77}></BsChevronDoubleRight> </Button>
      </Card.ImgOverlay>

 <ModalsCard show={modalShow} onHide={() => setModalShow(false)} receta={receta}  />
</Card>
      </Col>
    );
};

export default CardReceta;