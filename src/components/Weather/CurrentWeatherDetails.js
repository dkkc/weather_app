import React from 'react';
import classes from './Weather.css';


const CurrentWeatherDetails = (props) => {
    return (
        <div className={classes.Weather}  >
            <ul >
                <li> {props.city_name} </li>
                <li> {props.day} :  {props.date}   </li>
                <li>  {props.pod}  </li>
                <li> <img src={props.url} alt="url" /> {props.temp} </li>
                <li>   {props.app_temp} </li>
                <li>   {props.description} </li>
                <li>   {props.clouds} </li>
                <li>   {props.sunrise} </li>
                <li>   {props.sunset} </li>
                <li>   {props.ob_time} </li>
            </ul>
            {props.children}
        </div>
    )
}

export default CurrentWeatherDetails;