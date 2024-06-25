import React from 'react';
import '../styleSheets/Unboxing.css';

function Unboxing(){
    return(
        <div className='box-container'>
            <img className='image' src={require('../images/pngegg.png')} alt='Foto de jason'/>
            <div className='description-container'>
                <p className='name-container'>Mk 14 Enhanced Battle Rifle</p>
                <p className='crs-container'> aqui van referencias</p>
                <p className='description-container'>descripcion del arma</p>

            </div>
        </div>
    );
}

export default Unboxing;