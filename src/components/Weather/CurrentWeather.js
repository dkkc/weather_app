import React , { Component } from 'react';

import Weather from './Weather';
import WeatherDetails from './WeatherDetails';

import { getDay } from '../../Tools/Date';
import { getTemp, getWeatherIcon } from '../../Tools/weatherAPI';


class CurrentWeather extends Component {
    constructor(props) {
        super(props);
    }
   

    _renderCurrentWeatherResults = () => {
        return this.props.data.map((element,index) => {
            return (
                <Weather>
                    <WeatherDetails
                        day={getDay(new String(element.datetime).slice(0,10))}
                        date={new String(element.datetime).slice(0,10)}
                        temp={getTemp(element.temp)}
                        url={getWeatherIcon(element.weather.icon)}
                        description={element.weather.description}
                        key = {index}
                    />
                </Weather>
            )
        })
    
    } 
    render() {
        return this._renderCurrentWeatherResults();
    }

}

export default CurrentWeather;
    
