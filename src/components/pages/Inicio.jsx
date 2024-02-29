import React from 'react';
import Banner from "../common/Banner"
import {Form , Row} from "react-bootstrap"
import CardReceta from "../pages/receta/CardReceta"

const Inicio = () => {
    return (
        <>
        
        <Banner></Banner>
       
        <h1 className="display-4 ms-5 mt-3 ">Nuestros Productos</h1>
        <Form.Select  size="lg" className="ms-5  w-75">
        <option>Large select</option>
      </Form.Select>

        <hr />
<CardReceta></CardReceta>
        </>
    );
};

export default Inicio;