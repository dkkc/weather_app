import React, { Component } from 'react';

import Weather from './Weather';
import CurrentWeatherDetails from './CurrentWeatherDetails';

import { getDay } from '../../Tools/Date';
import { getTemp, getWeatherIcon , partOfTheDay} from '../../Tools/weatherAPI';


class CurrentWeather extends Component {
    constructor(props) {
        super(props);
    }

    

    _renderCurrentWeatherResults = () => {
        return this.props.data.map((element, index) => {
            return (
                
                <Weather>
                   
                    <CurrentWeatherDetails
                        city_name={element.city_name}
                        day={getDay(new String(element.datetime).slice(0, 10))}
                        date={new String(element.datetime).slice(0, 10)}
                        pod={partOfTheDay(element.pod)}
                        temp={getTemp(element.temp)}
                        app_temp={element.app_temp}
                        url={getWeatherIcon(element.weather.icon)}
                        description={element.weather.description}
                        clouds={element.clouds}
                        sunrise={element.sunrise}
                        sunset={element.sunset}
                        ob_time={element.ob_time}
                        key={index}
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

