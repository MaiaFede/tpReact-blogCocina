import React from 'react';
import Banner from "../common/Banner"
import {Form , Row} from "react-bootstrap"

const Inicio = () => {
    return (
        <>
        
        <Banner></Banner>
       
        <h1 className="display-4 ms-5 mt-3 ">Nuestros Productos</h1>
        <Form.Select  size="lg" className="ms-5  w-75">
        <option>Large select</option>
      </Form.Select>
       
        
       
       
        <hr />
        </>
    );
};

export default Inicio;