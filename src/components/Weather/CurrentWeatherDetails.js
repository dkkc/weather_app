import React from 'react';
import classes from './Weather.css';


const CurrentWeatherDetails = (props) => {
    return (
        <div className={classes.CurrentWeather}  >
            <ul >
                <li> {props.city_name} </li>
                <li> {props.day} :  {props.date}   </li>
                <li>  {props.pod}  </li>
                <li> <img src={props.url} alt="url" /> {props.temp} </li>
                <li>   {props.description} </li>
                <li>  Temperatura odczuwalna  {props.app_temp} </li>
                <li>  Zachmurzenie {props.clouds}% </li>
                <li>  Wschód słońca {props.sunrise} </li>
                <li>  Zachód słońca {props.sunset} </li>
                <li>  Ostatnia  aktualizacja {props.ob_time} </li>
            </ul>
            {props.children}
        </div>
    )
}

export default CurrentWeatherDetails;