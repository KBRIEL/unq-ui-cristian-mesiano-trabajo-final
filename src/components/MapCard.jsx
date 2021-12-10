import React,{useEffect,useState} from 'react';
import Card from './Card';
import ObjCarta from './ObjCarta';
import Tools from './Tools';



const MapCard=(props)=>{
   
    const [cartas, setCartas] = useState([]);
    const [primerEleccion, setPrimerEleccion] = useState({});
    const [segundaEleccion, setSegundaEleccion] = useState({});
    const puntos = props.puntos;
    const [cartasSinGirar, setcartasSinGirar] = useState([]);
    const [cartasDeshabilitadas, setcartasDeshabilitadas] = useState([]);
    const [css, setCss] = useState('container4 col-xs-6 col-md-4');
    const[descubiertas,setDescubiertas]=useState(0);
    const[estaEnJugo,setEnJuego]=useState(false);
    const [bool,setBool]=useState(true);
    const[estadoDelJuego, setEstadoDelJuego]=useState('');
    var record=props.record;
    var setRecord=props.setRecord;
    var nro=props.nro;
    var resetPuntos=props.resetPuntos;


 
    
  
    useEffect(() => {
      
      cuatro();
      
   
    }, [])
  
    useEffect(() => {
      ganar();
     coinciden();
    }, [segundaEleccion]);
  

    

    const agregarDescubierta=()=>{
      setDescubiertas(descubiertas+1)
      setEnJuego(true);
      
    }

    const soyRecord=()=>{
      if(record=='sin'|| record>nro){
          setRecord(nro);
      }
    }
    const ganar=()=>{
     
      if(cartas.length===(descubiertas*2) && cartas.length>0){
        soyRecord();
        setEstadoDelJuego('Fin del Juego');
        setTimeout(()=>{setEstadoDelJuego('Fin del Juego . . ')},200);
        setTimeout(()=>{setEstadoDelJuego('Fin del Juego . . . . ')},400);
        setTimeout(()=>{setEstadoDelJuego('Fin del Juego . . . . . . ')},600);
        setTimeout(()=>{setEstadoDelJuego('Fin del Juego . . . . . . . . ')},800);
        setTimeout(()=>{setEstadoDelJuego('Fin del Juego:  vuelva a jugar la partida o inicie un nuevo juego')},1000);
    
      }
     
    }



    const girar = (name, number) => {
      if (primerEleccion.name === name && primerEleccion.number === number) {
      
        return false;
      }

      if (!primerEleccion.name) {
        setPrimerEleccion({ name, number });
      }else if (!segundaEleccion.name) {
        setSegundaEleccion({ name, number });
      }
      
      return true;
    }




   const reset = () => {
        puntos();
      setPrimerEleccion({});
      setSegundaEleccion({});
    }

    const coinciden = () => {
      if (primerEleccion.name && segundaEleccion.name) {
        const match = primerEleccion.name === segundaEleccion.name;
        match ? deshabilitar() : habilitar();
        puntos();
        ganar();
      }
      
    }
    
    
   
    const deshabilitar=()=>{
     
      Tools.deshabilitarCartas(primerEleccion,segundaEleccion,setcartasDeshabilitadas);
      agregarDescubierta();
      reset();
      
    }
    
  
    const habilitar=()=>{
      Tools.habilitar(primerEleccion,segundaEleccion,setcartasSinGirar);
      reset();
    }


// ---------------TABLEROS-----------------------------

    const cuatro=()=>{
      if(!estaEnJugo){
        resetPuntos();
        setCss('container4 col-xs-2 col-md-4');
      setCartas(ObjCarta.tableroCuatro)
      }
      
    }

    const seis=()=>{
      if(!estaEnJugo){
        resetPuntos();
      setCss('col-xs-3 col-md-6 container6');
      setCartas(ObjCarta.tableroSeis)
      }
    }

    const ocho=()=>{
      if(!estaEnJugo){
        resetPuntos();
      setCss('container5 col-xs-4 col-md-8');
      setCartas(ObjCarta.datos)
      }
    }
  

    const reiniciar=()=>{
      setEstadoDelJuego('');
      setcartasDeshabilitadas([]);
      setDescubiertas(0)
      resetPuntos();
      setBool(false);
      setTimeout(()=>{setBool(true)},100);
    }
   
    
     
  
    return (
      <div className='app'>
        <div className="button-container">
            <button className='barra-botton' onClick={cuatro}>4x4</button>
            <button className='barra-botton' onClick={seis}>6x6</button>
            <button className='barra-botton' onClick={ocho}>8x8</button>
            <button className='barra-botton2' onClick={reiniciar}>Reiniciar Partida</button>
        </div>
        <div >
          <h2 className='centrar'>{estadoDelJuego}</h2>
        </div>
        <div className={css} >
          {bool &&
            cartas.map(carta => (
              <Card  index={carta.index} position={carta.position} image={carta.image}
                girar={girar} cartasSinGirar={cartasSinGirar} cartasDeshabilitadas={cartasDeshabilitadas}/>
            ))
          }
        </div>
      </div>
    );
    }

export default MapCard;