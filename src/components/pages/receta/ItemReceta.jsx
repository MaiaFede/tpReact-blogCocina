import React from 'react';
import { Button } from "react-bootstrap";

const ItemReceta = ({recetaProps}) => {
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
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemReceta;