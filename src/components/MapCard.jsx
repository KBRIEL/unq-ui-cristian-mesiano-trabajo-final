import React,{useEffect,useState} from 'react';
import Card from './Card';
import ObjCarta,{datos} from './ObjCarta';



const MapCard=()=>{
    
    var [cartasIniciales,setCartasI]=useState([]);
    var [cartasFinales,setCartasF]=useState([]);
    const [state,setState]=useState(<h1>no hay tablero</h1>)

    const cargarDatos=()=>{
        setCartasI(ObjCarta.datos);
        {cartasIniciales.length!=0? setState(cartasIniciales.map(element=><Card className='Card' obj={element}/>)):setState(<h1>no hay tablero</h1>)}
    }

   
 

    useEffect(() => {
        cargarDatos();

    }, [])

    return (

        <div className='container5'>
           
            {cartasIniciales.map(element=><Card className='Card' obj={element}/>)}
            
            
        </div>
    );

}

export default MapCard;