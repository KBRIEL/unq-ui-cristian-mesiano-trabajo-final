
import '../App.css';
import React,{useEffect,useState} from 'react';
import unq from  '../images/unq.png';//editar
import ObjCarta from './ObjCarta';
import ReactCardFlip from 'react-card-flip';

const Card = (props ) => {
   
   const index=props.index;
   const position=props.position;
   const image=props.image;
   const girar=props.girar;
   const cartasDeshabilitadas=props.cartasDeshabilitadas;
   const cartasSinGirar=props.cartasSinGirar;
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);
  
const noEstaGirada=()=>{
   if (cartasSinGirar.includes(position)) {
        setTimeout(() => setIsFlipped(false), 700);
      }
}

const deshabilitadas=()=>{
   if (cartasDeshabilitadas.includes(position)) {
        setHasEvent(false);
      }
}

    useEffect(() => {
     noEstaGirada();
    }, [cartasSinGirar])
  
    useEffect(() => {
     deshabilitadas();
    }, [cartasDeshabilitadas])
  
    const handleClick = e => {
      const valor = girar(index, position);
      if (valor !== 0) {
        setIsFlipped(!isFlipped);
      }
    }
  
    return (
        <div className="carta-holder">
        <div className="main">
       <div className="carta" >
        <ReactCardFlip isFlipped={isFlipped} >
        <div className ="carta-dorso">
          <img className='img' src={unq} alt='back-face' onClick={hasEvent ? handleClick : null} />
          </div>
            <div  className="carta-frente">
          <img className='img' src={image} alt='front-face' onClick={hasEvent ? handleClick : null} />
        </div>
    </ReactCardFlip>
      </div>
      </div>
    </div>

    
    )
  }
  
  export default Card
 