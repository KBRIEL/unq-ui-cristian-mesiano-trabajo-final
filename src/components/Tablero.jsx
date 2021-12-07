import React from 'react';
import '../App.css';
import MapCard from './MapCard';




const Tablero=(props)=>{
  
    const puntos=props.puntos;
    var setRecord=props.setRecord;
    var record=props.record;
    var nro=props.nro;
    var resetPuntos=props.resetPuntos;
 
 
return(
    <div  className='tablero center'>
  
  
  <MapCard puntos={puntos} setRecord={setRecord} record={record} nro={nro}  resetPuntos={resetPuntos}/> 
       
    </div>
);
}

export default Tablero;
