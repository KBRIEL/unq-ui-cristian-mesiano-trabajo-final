import '../App.css';
import unq from  '../images/unq.png';
import note2 from '../images/note2.png';



const Card=(props)=>{
return(
    <div className="carta-holder">
    
    <div className="main">
        <div className="carta">
            <div className="carta-dorso">
                <img src={unq}width='100%'/>
            </div>
            <div className="carta-frente">
                <img src={note2} width='70%' />
            </div>
        </div>
    
    </div>
</div>
);
}

export default Card;