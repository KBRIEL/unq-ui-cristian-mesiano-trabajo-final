import '../App.css';
import Tablero from './Tablero';
import Barra from './Barra';
import React,{useEffect,useState} from 'react';







const Memotec=()=>{


return(
    <div className='memotec' >
        <Barra/>
        <Tablero />        
    </div>
);
}

export default Memotec;