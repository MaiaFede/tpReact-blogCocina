import React from 'react';
import { Button, Table } from "react-bootstrap";
import {Link} from "react-router-dom"
import ItemReceta from "./receta/ItemReceta"
import {useState, useEffect} from "react"

const Administracion = () => {
const [recetas, setRecetas] = useState([]);

useEffect(()=>{
    obtenerRecetas()
} , []);

obtenerRecetas  = async () => {
    const respuesta = await leerRecetas();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      setRecetas(datos)
    } else {
    }
  };
    return (
        <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <Link className="btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
        </div>
      <hr />
      <Table responsive striped bordered hover >
        <thead className="table-danger">
          <tr className="text-center">
            <th>Cod</th>
            <th>Receta</th>
            <th>Categoria</th>
            <th>URL de Imagen</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
{recetas.map((receta)=> <ItemReceta key={receta.id} recetaProps={receta}> </ItemReceta>)}
        </tbody>
      </Table>
    </section>
    );
};

export default Administracion;