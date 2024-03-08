import React from 'react';
import Banner from "../common/Banner"
import {Form , Row, Col} from "react-bootstrap"
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
    //console.log(dato.categoria)
    setCategoriaSeleccionada(dato.categoria)

  };
    return (
      <>
         <Banner></Banner>
       <h1 className="display-4 ms-3 mt-3 ">Nuestras Recetas</h1>
       <div className="container-fluid">
       <Form onSubmit={handleSubmit(onSubmit)} className="">
       <Row className="d-flex flex-end">
       <Col md={7}>
        <Form.Select size="lg" className=" w-100 " aria-label="Seleccione una categoria:" {...register("categoria", { required: categoriaSeleccionada ? false : "Debe seleccionar una categoria"})}  defaultValue="">
          <option value="">Todas las categorias</option>
          <option value="Nuevo">Nuevo</option>
          <option value="Batidos">Batidos</option>
          <option value="Dulce">Dulce</option>
          <option value="Salado">Salado</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
        </Col>
        <Col md={5}>
      <button type="submit" className="btn btn-cute">Buscar</button>
      </Col>
      </Row> 
      </Form>
       </div>
   <hr />
        <section className="container-fluid">
        <ListaCategoria recetasInicio={recetasInicio } categoriaSeleccionada={categoriaSeleccionada}> </ListaCategoria>
</section>
</>
    );
};

export default Inicio;