const APIReceta = import.meta.env.VITE_API_RECETA;

export const leerRecetas = async () => {
    try {
      const respuesta = await fetch(APIReceta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };