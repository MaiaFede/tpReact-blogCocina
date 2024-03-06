import React from 'react';
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {borrarReceta, leerRecetas} from "../../../helpers/queries"
import { Link } from "react-router-dom";

const ItemReceta = ({recetaProps, setRecetas}) => {
  const eliminarReceta= () =>{
    Swal.fire({
      title: "Estas seguro de eliminar la receta?",
      text: "No se puede revertir la operación!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarReceta(recetaProps.id);
        if(respuesta.status === 200){
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta ${recetaProps.nombreReceta} fue eliminada correctamente`,
            icon: "success"
          });
const respuestaRcetasNuevas = await leerRecetas();
console.log(respuestaRcetasNuevas)
if(respuestaRcetasNuevas.status === 200){
  const NuevasRecetas = await respuestaRcetasNuevas.json();
  setRecetas(NuevasRecetas)
}
}else {
          Swal.fire({
            title:"Ocurrio un error",
            text: `La receta ${recetaProps.nombreReceta} no fue eliminada, intente esta operacion en unos minutos. `,
          icon: "error"
          });
        }
       
      }
    });
  }
    return (
        <tr>
       <td className="text-center">{recetaProps.id}</td>
      <td>{recetaProps.nombreReceta}</td>

      <td>{recetaProps.categoria}</td>
        
      <td className="text-center">
      <img
          src={recetaProps.imagen}
          className="img-thumbnail"
          style={{heigth: "10rem", width:"10rem"}}
          alt={recetaProps.nombreReceta}
        ></img>
     </td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={"/administracion/editar/"+ recetaProps.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemReceta;