import React from 'react';
import { Row } from "react-bootstrap";
import CardReceta from './CardReceta';

const ListaCategoria = ({recetasInicio, categoriaSeleccionada}) => {
  let recetasFiltradas = recetasInicio;
  if (categoriaSeleccionada) {
     recetasFiltradas = recetasInicio.filter(receta => receta.categoria === categoriaSeleccionada);
  console.log(recetasFiltradas)
  }else {
    recetasFiltradas = recetasInicio; 
    console.log(recetasFiltradas)
  }

  return (
  
   <Row>
      {
      recetasFiltradas.map(receta => (
        <CardReceta key={receta.id} receta={receta} />
      ))}
  </Row>
    
  );
      }
export default ListaCategoria;