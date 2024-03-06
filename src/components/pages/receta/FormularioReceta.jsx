import React from 'react';
import { Form, Button } from "react-bootstrap";
import { crearReceta , obtenerReceta, editarReceta} from "../../../helpers/queries";
import { useForm} from "react-hook-form";
import { useState, useEffect} from "react";
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2';

const FormularioReceta = ({titulo,editando}) => {
  const {register, handleSubmit, formState:{errors}, reset, setValue} = useForm(); 

  const [ingredientes, setIngredientes]= useState([]);
  const [instrucciones, setInstrucciones] = useState([]);
  const {item} = useParams()
  const navegacion = useNavigate();

  useEffect(()=>{
    if(editando){
      cargarRecetaEnFormulario();
    }
  }, [])

  const cargarRecetaEnFormulario = async()=>{
    const respuesta = await obtenerReceta(item)
    if (respuesta.status === 200) {
      const recetaBuscada = await respuesta.json();
      console.log(recetaBuscada);
      setValue("nombreReceta", recetaBuscada.nombreReceta);
      setValue("imagen", recetaBuscada.imagen);
      setValue("ingredientes", recetaBuscada.ingredientes);
      setValue("instrucciones", recetaBuscada.instrucciones);
      setValue("categoria", recetaBuscada.categoria);
    }
  }

  const validateIngredientes = (value) => {
    if (!value) return "Los ingredientes son obligatorios";
    const ingredientesArray = value.split(',');
    if (ingredientesArray.length < 2) return "Debe ingresar al menos dos ingredientes separados por coma";
    }

  const datosValidados = async (receta) => {
    if (editando) {
      const respuesta = await editarReceta(receta, item);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta editada",
          text: `La receta: ${receta.nombreReceta}, fue editada correctamente`,
          icon: "success",
        });
        navegacion('/administracion');
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La receta: ${receta.nombreReceta}, no pudo ser editada, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      const recetaFinal = {
        ...receta,
        ingredientes:[receta.ingredientes],
        instrucciones:[receta.instrucciones]
      };
      const respuesta = await crearReceta(recetaFinal);
      
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta creada",
          text: `La receta: ${receta.nombreReceta}, fue creada correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La receta no pudo ser creada, intente esta operación en unos minutos`,
          icon: "error",
        });
      }
    }
  };

  

    return (
        
        <section className="container mainSection">
        <h1 className="display-4 mt-5">{titulo}</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
          <Form.Group className="mb-3" controlId="formNombreReceta">
            <Form.Label>Nombre Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Helado"
              {...register('nombreReceta',{
                required: "El nombre del producto es un dato obligatorio",
                minLength:{
                  value: 4,
                  message: "El nombre del producto debe tener como minimo 4 caracteres"
                },
                maxLength:{
                  value: 50,
                  message: "El nombre del producto debe tener como maximo 50 caracteres"
                }
              })}
            />
            <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>
            
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              {...register('imagen',{
                required: "La url de la imagen es obligatoria",
                pattern: {
                  value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/,
                  message: "Debe ingresar una URL valida, con una imagen en formato (jpg|jpeg|gif|png)"
                }
              })}
            />
            <Form.Text className="text-danger">
          {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoría*</Form.Label>
            <Form.Select {
            ...register('categoria',{
              required: "Debe seleccionar una categoria"
            })
          } >           
              <option value="">Seleccione una opcion</option>
              <option value= "Nuevo">Nuevo</option>
              <option value="Batidos">Batidos</option>
              <option value="Dulce">Dulce</option>
              <option value="Salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">
            {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIngredientes">
            <Form.Label>Ingredientes*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Chocolate, Harina 300g, Azúcar 200g"
              as="textarea"
              {...register('ingredientes', {
                required: "Los ingredientes son obligatorios",
                validate: validateIngredientes
              })}
            />
            <Form.Text className="text-danger">
          {errors.ingredientes?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Instrucciones*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Precalienta el horno a 180°C y engrasa un molde para hornear de aproximadamente 20x20 cm..."
              as="textarea"
              {...register('instrucciones', {
                required: "Las instrucciones son obligatorias",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como minimo 10 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "Debe ingresar como maximo 500 caracteres",
                },
              })}
  
            />
            <Form.Text className="text-danger">
        {errors.instrucciones?.message}
            </Form.Text>
          </Form.Group>
          
          <Button type="submit" variant='success'>
            Guardar
          </Button>
        </Form>
      </section>
    );
};

export default FormularioReceta;