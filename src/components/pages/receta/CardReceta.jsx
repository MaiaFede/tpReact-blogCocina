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
         <Card  style={{ width: '24rem', heigth:"78rem" }} className="ms-3">
        
         <Card.Img src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="img-fluid img-card" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Title className="display-3 text-light">Cupcake Ferrero </Card.Title>
       <Button variant="link" style={{border: "none", padding:0}} className="button-icon"onClick={() => setModalShow(true)}> <BsChevronDoubleRight size={57}></BsChevronDoubleRight> </Button>
      </Card.ImgOverlay>
      <ModalsCard show={modalShow} onHide={() => setModalShow(false)} />
   
    {/*   <Card.Img  src={banner_donut}  className="img-fluid img-card"/>
      <Button className="btn btn-icon" onClick={() => setModalShow(true)}>
      <i class="bi bi-patch-plus"></i>
      </Button>

      <ModalsCard show={modalShow} onHide={() => setModalShow(false)} /> 
      <div style="position: relative; width: 100%; height: 0; padding-top: 177.7778%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-IUiLnTM&#x2F;1dfMwBuOv4QwNOuCP-KZOw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-IUiLnTM&#x2F;1dfMwBuOv4QwNOuCP-KZOw&#x2F;view?utm_content=DAF-IUiLnTM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Black and Brown Minimalist New Recipe Instagram Story</a> de Maia Gutierrez*/}

</Card>
      </Col>
    );
};

export default CardReceta;