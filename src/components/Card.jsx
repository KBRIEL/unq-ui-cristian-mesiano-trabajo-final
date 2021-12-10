
import '../App.css';
import React,{useEffect,useState} from 'react';
import unq from  '../images/unq.png';
import ReactCardFlip from 'react-card-flip';

const Card = (props ) => {
   
  const index=props.index;
  const position=props.position;
  const image=props.image;
  const girar=props.girar;
  const cartasDeshabilitadas=props.cartasDeshabilitadas;
  const cartasSinGirar=props.cartasSinGirar;
  const [boolean, setBoolean] = useState(false);
  const [clickButon, setClickButton] = useState(true);
  
const noEstaGirada=()=>{
   if (cartasSinGirar.includes(position)) {
        setTimeout(() => setBoolean(false), 700);
      }
}

const deshabilitadas=()=>{
   if (cartasDeshabilitadas.includes(position)) {
        setClickButton(false);
      }
}

    useEffect(() => {
     noEstaGirada();
    }, [cartasSinGirar])
  
    useEffect(() => {
     deshabilitadas();
    }, [cartasDeshabilitadas])
  
    const handleClick = (e)=> {
      
        if (girar(index, position) ) {
        setBoolean(!boolean)
      }
    }
  
    return (
        <div >
              <ReactCardFlip isFlipped={boolean} >
                <div className ="carta-dorso">
                  <img className='img' src={unq} alt='back-face' onClick={clickButon ? handleClick : null} />
                </div>
                <div  className="carta-frente">
                  <img className='img' src={image} alt='front-face' onClick={clickButon ? handleClick : null} />
                </div>
              </ReactCardFlip>
        </div>

    
    )
  }
  
  export default Card
 