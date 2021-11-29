import React,{useEffect,useState} from 'react';
import '../App.css';
import MapCard from './MapCard';


const Tablero=(props)=>{

 
return(
    <div  className='tablero'>
       
  
        <div>
           <MapCard /> 
        </div>
       
    </div>
);
}

export default Tablero;
