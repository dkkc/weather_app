import React, { Component } from 'react';

import Weather from './Weather';
import WeatherDetails from './WeatherDetails';

import { getDay } from '../../Tools/Date';
import { getTemp, getWeatherIcon } from '../../Tools/weatherAPI';

class ForecastWeather extends Component {
    constructor(props) {
        super(props);
    }

_renderForecastWeatherResults = () => {
    return this.props.data.map((element,index) => {
        return (
            <Weather>
                <WeatherDetails
                    day={getDay(new Date(element.datetime))}
                    date={element.datetime}
                    temp={getTemp(element.max_temp)}
                    url={getWeatherIcon(element.weather.icon)}
                    description={element.weather.description}
                    key = {index}
                />
            </Weather>
        )
    })

} 
    render() {
        return this._renderForecastWeatherResults();
    }

}

export default ForecastWeather;