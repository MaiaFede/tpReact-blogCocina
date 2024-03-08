const APIReceta = import.meta.env.VITE_API_RECETA;
//console.log (APIReceta)

export const leerRecetas = async () => {
    try {
      const respuesta = await fetch(APIReceta);
      return respuesta;
      
    } catch (error) {
      console.log(error);
    }
  };

  export const crearReceta = async (recetaNueva) => {
    try {
      const respuesta = await fetch(APIReceta,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(recetaNueva)
      });
      //console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const borrarReceta = async (id) => {
    try {
      const respuesta = await fetch(APIReceta+'/'+id,{
        method: "DELETE"     
      });
      //console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

export const obtenerReceta = async (item) => {
  try {
    const respuesta = await fetch(APIReceta+'/'+item);
    //console.log(respuesta)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarReceta = async (recetaEditada, item) => {
  try {
    const respuesta = await fetch(APIReceta+'/'+item,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(recetaEditada)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
