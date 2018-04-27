import React from 'react';
import moon from '../Tools/moon.png';
import night from '../../src/img/Weather-Icons/png/gray/ic_moon.png';
import day from '../../src/img/Weather-Icons/png/gray/ic_sun.png';

import classes from './Util.css';

export const API_KEY = '3d6322a9ea164e99830e4e07fa8b5e2c'
export const WEATHER_ICON_API = 'https://www.weatherbit.io/static/img/icons/';
export const OPEN_WEATHER_MAP_ICON = 'http://openweathermap.org/img/w/';
export const FORECAST_DAILY_API = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';
export const CURRENT_WEATHER_BY_IP = 'https://api.weatherbit.io/v2.0/current?ip=auto';

export const getTemp = (args) => {
    const temp = args + '°C';
    return temp;
}


export const getWeatherIcon = (iconCode) => {
    const weather_icon = WEATHER_ICON_API + iconCode + '.png';
    return weather_icon;
}

export const getOpenWeatherMapIcon = (iconCode) => {
    const open_weather_icon = getWeatherIcon(iconCode).slice(1, 4);
    const icon = OPEN_WEATHER_MAP_ICON + open_weather_icon + '.png';
    console.log('open', open_weather_icon);
    return icon;
}


export const partOfTheDay = (pod) => {
    if (pod === 'd') {
        return <img className={classes.Img} src={
            day
        }
        />
    } else if (pod === 'n') {
        return <img className={classes.Img} src={
            night
        }
        />
    }
};