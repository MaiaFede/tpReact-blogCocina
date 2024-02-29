import React from 'react';
import Banner from "../common/Banner"
import {Form , Row} from "react-bootstrap"
import CardReceta from "../pages/receta/CardReceta"
import { leerRecetas } from "../../helpers/queries";
import {useState, useEffect} from "react"
import ModalsCard from './receta/ModalsCard';

const Inicio = () => {
  const [recetasInicio, setRecetasInicio] = useState([]);

  useEffect(()=>{
      obtenerRecetas();
  } , []);
  
  const obtenerRecetas  = async () => {
      const respuesta = await leerRecetas();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos);
        setRecetasInicio(datos)
      } else {
      }
    };
    return (
        <>
        
        <Banner></Banner>
       
        <h1 className="display-4 ms-3 mt-3 ">Nuestros Productos</h1>
        <Form.Select  size="lg" className="ms-5  w-50">
        <option>Large select</option>
      </Form.Select>

        <hr />
        <Row>
{recetasInicio.map ((recetaInicio)=> <CardReceta key={recetaInicio.id} recetaInicio={recetaInicio}></CardReceta>)}
</Row>

        </>
    );
};

export default Inicio;