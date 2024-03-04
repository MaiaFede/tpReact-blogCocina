import React from 'react';
import { Form, Button } from "react-bootstrap";

const FormularioReceta = () => {
    return (
        
        <section className="container mainSection">
        <h1 className="display-4 mt-5">Nueva receta</h1>
        <hr />
        <Form className="my-4">
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Nombre Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Helado"
            />
            <Form.Text className="text-danger">
              prueba de error
            </Form.Text>
          </Form.Group>
            
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            />
            <Form.Text className="text-danger">
          prueba de error
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoría*</Form.Label>
            <Form.Select>
              <option value="">Seleccione una opcion</option>
              <option value= "nuevo">Nuevo</option>
              <option value="Batidos">Batidos</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">
            prueba de error
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Ingredientes*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Chocolate, Harina 300g, Azúcar 200g"
              as="textarea"
            />
            <Form.Text className="text-danger">
          prueba de error
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Instrucciones*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Precalienta el horno a 180°C y engrasa un molde para hornear de aproximadamente 20x20 cm..."
              as="textarea"
            />
            <Form.Text className="text-danger">
          prueba de error
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