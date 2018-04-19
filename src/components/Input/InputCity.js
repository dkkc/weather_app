import React from 'react';
import classes from './Input.css';


const inputCity = (props) => {
    return (
        <div className= {classes.Input}>
            <p>Prognoza dla miejscowości: { props.city_name }</p>
            <input type="text" onKeyUp={ props.onSearchCity} placeholder = "wpisz nazwę miasta i naciśnij ENTER" />
            {/* <button className = "Button" onClick = {props.clicked}>Pokaż</button> */}
        </div>    
        
    )
}

export default inputCity;

