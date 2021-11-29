import React,{useEffect,useState} from 'react';
import ImageList from './Image';
import note2 from '../images/note2.png';
import Card from './Card';



const MapCard=()=>{
    const iconos = ImageList();
    var [cartasIniciales,setCartasI]=useState([note2,note2,note2,note2,note2,note2,note2,note2]);
    var [cartasFinales,setCartasF]=useState([]);

   

    return (

        <div className='container5'>
            {cartasIniciales.map(e=><Card className='Card' src={e}/>)}
        </div>
    );

}

export default MapCard;