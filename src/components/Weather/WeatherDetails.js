import React from 'react';
import classes from './Weather.css';


const WeatherDetails = (props) => {
    return (
        <div>
            <p> {props.day} {props.date} {props.city} </p>
            <p> {props.temp} {props.description} </p>
            { props.children }
        </div>    
    )
}

export default WeatherDetails;