import React from 'react';
import calsses from './Input.css';


const inputCity = (props) => {
    return (
        <div className= {calsses.Input}>
            <h3>Prognoza dla miasta: { props.city_name }</h3>
            <input type="text" onKeyUp={ props.city} />
            <button onClick = {props.clicked}>Pokaż</button>
        </div>    
        
    )
}

export default inputCity;

