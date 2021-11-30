import '../App.css';
import React from 'react';
import unq from  '../images/unq.png';//editar




const Card=(props)=>{
    var obj= props.obj;
    
return(
    <div>
        <div className="carta-holder">
         <div className="main">
        <div className="carta">
            <div className="carta-dorso">
                <img src={unq} className='img'/>
            </div>
            <div className="carta-frente">
                <img src={obj.image}className='img' />
            </div>
        </div>
    </div>
    </div>

    </div>
    );
}

export default Card;