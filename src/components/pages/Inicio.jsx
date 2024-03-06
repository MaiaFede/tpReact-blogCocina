import React from 'react';
import Banner from "../common/Banner"
import {Form , Row} from "react-bootstrap"
import ListaCategoria from './receta/ListaCategoria';
import { leerRecetas } from "../../helpers/queries";
import {useState, useEffect} from "react"
import ModalsCard from './receta/ModalsCard';
import { useForm } from "react-hook-form";

const Inicio = () => {
  const [recetasInicio, setRecetasInicio] = useState([]);
 const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  useEffect(()=>{
      obtenerRecetas();
  } , []);
  
  const obtenerRecetas  = async (categoria) => {
      const respuesta = await leerRecetas(categoria);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setRecetasInicio(datos)
      } else {
      }
    };
  
  const onSubmit = (dato) => {
    console.log(dato.categoria)
    setCategoriaSeleccionada(dato.categoria)

  };
    return (
      <>
         <Banner></Banner>
       <h1 className="display-4 ms-3 mt-3 ">Nuestros Productos</h1>
       <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Select size="lg" className="ms-5 w-50" aria-label="Seleccione una categoria:" {...register("categoria", { required: "Debe seleccionar una categoria" })}>
          <option value="">Seleccione un pais:</option>
          <option value="Nuevo">Nuevo</option>
          <option value="Batidos">Batidos</option>
          <option value="Dulce">Dulce</option>
          <option value="Salado">Salado</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
        <button type="submit" className="btn btn-primary">Buscar</button>
      </Form>
   <hr />
        <section className="container-fluid">
        <ListaCategoria recetasInicio={recetasInicio } categoriaSeleccionada={categoriaSeleccionada}> </ListaCategoria>
</section>
</>
    );
};

export default Inicio;