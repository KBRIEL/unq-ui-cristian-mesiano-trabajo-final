import '../App.css';
import Tablero from './Tablero';
import Barra from './Barra';
import React, {useState} from 'react';








const Memotec=()=>{
    
    const [puntos,setPuntos]= useState(0);
    const[record, setRecord]=useState('x');

    const cargarPuntos=()=>{
         setPuntos(puntos + 1) 
    }

    const resetPuntos=()=>{
        setPuntos(0) 
   }

    const cargarRecord=(nro)=>{
        setRecord(nro)
    }


return(
    <div className='memotec' >
        <Barra puntos={puntos} record={record}/>
        <Tablero puntos={cargarPuntos} setRecord={cargarRecord} record={record} nro={puntos} resetPuntos={resetPuntos}/>        
    </div>
);
}

export default Memotec;
