import React  from 'react';
import '../App.css';



const Barra=(props)=>{
  var puntaje=props.puntos;
  var record=props.record;

  

return(
    <div className='barra'>
      <div><h2>INTENTOS : {puntaje}</h2></div>  
      <div className='barra-botton2'><a className='barra-botton2' href={'/'}>NUEVO JUEGO</a></div>
      <div><h2>MEJOR POSICION: <br/>    {record} Intentos </h2></div>
    </div>
);
}

export default Barra;
