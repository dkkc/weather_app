import React from 'react';
import classes from './Weather.css';


const WeatherDetails = (props) => {
    return (
        <div className = "Weather">
        <ul >
            <p>{props.day} :  {props.date}</p>
            <li><img src = {props.url}/></li>
            {/* <li>  {props.city} </li> */}
            <li>  {props.temp} {props.description} </li>
            
            {/* { props.children } */}
        </ul>  
        </div>  
    )
}

export default WeatherDetails;