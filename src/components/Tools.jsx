



const deshabilitarCartas = (primerEleccion,segundaEleccion,setcartasDeshabilitadas) => {
   
    setcartasDeshabilitadas([primerEleccion.number, segundaEleccion.number]);
   
  };

  const habilitar = (primerEleccion,segundaEleccion,setcartasSinGirar) => {
    setcartasSinGirar([primerEleccion.number, segundaEleccion.number]);
   
  };




export default {deshabilitarCartas,habilitar};