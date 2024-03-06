import React from 'react';
import { Row } from "react-bootstrap";
import CardReceta from './CardReceta';
import { useGlobalState } from 'react-hook-form';

const ListaCategoria = ({recetasInicio}) => {
    const { categoriaSeleccionada } = useGlobalState('categoria');

  const recetasFiltradas = recetasInicio.filter(receta => receta.categoria === categoriaSeleccionada);

  return (
    <ul>
      {recetasFiltradas.map(receta => (
        <li key={receta.id}><CardReceta receta={receta} /></li>
      ))}
    </ul>
  );
      }
export default ListaCategoria;