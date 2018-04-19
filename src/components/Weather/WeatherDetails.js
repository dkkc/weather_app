import React from 'react';
import classes from './Weather.css';


const WeatherDetails = (props) => {
    return (
        <div className= {classes.Weather}  >
        <ul >
            <li>{props.day} :  {props.date}</li>
            <li><img src = {props.url} alt = "url"/>{props.temp}</li>
            <li>   {props.description} </li>
            
        </ul>  
        </div>  
    )
}

export default WeatherDetails;