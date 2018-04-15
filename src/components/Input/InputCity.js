import React from 'react';
import calsses from './Input.css';


const inputCity = (props) => {
    return (
        <div className= "Input">
            <p>Prognoza dla miejscowości: { props.city_name }</p>
            <input type="text" onKeyUp={ props.city} placeholder = "wpisz nazwę miasta i naciśnij ENTER" />
            {/* <button className = "Button" onClick = {props.clicked}>Pokaż</button> */}
        </div>    
        
    )
}

export default inputCity;

