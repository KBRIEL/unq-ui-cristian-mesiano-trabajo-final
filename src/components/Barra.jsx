import React,{useState} from 'react';
import '../App.css';


const Barra=()=>{
  const[puntos,setPuntos]=useState(0);
  const[record, setRecord]=useState('x');
return(
    <div className='barra'>
      <div><h2>INTENTOS : {puntos}</h2></div>  
      <div><button className='barra-botton'>COMENZAR</button></div>  
      <div><h2>MEJOR POSICION: {record} Intentos </h2></div>
    </div>
);
}

export default Barra;
