import React, { Component } from 'react';

import Weather from './Weather';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import InputCity from '../Input/InputCity';
import { getDay } from '../../Tools/Date';
import { getTemp, getWeatherIcon, partOfTheDay } from '../../Tools/weatherAPI';


class CurrentWeather extends Component {
    constructor(props) {
        super(props);
    }



    _renderCurrentWeatherResults = () => {
        return this.props.data.map((element, index) => {
            return (
                <div className=''>
                    <header>
                    <InputCity
                        city_name={element.city_name}
                        onSearchCity={(event) => this.onSearchCityHandler(event)}
                        clicked={(event) => this.onCurrentWeather(event)}
                    />

                    </header>    
                    
                    <CurrentWeatherDetails
                        city_name={element.city_name}
                        day={getDay(new String(element.datetime).slice(0, 10))}
                        date={new String(element.datetime).slice(0, 10)}
                        temp={getTemp(element.temp)}
                        app_temp={element.app_temp}
                        url={getWeatherIcon(element.weather.icon)}
                        description={element.weather.description}
                        clouds={element.clouds}
                        sunrise={element.sunrise}
                        sunset={element.sunset}
                        ob_time={element.ob_time}
                        pod={partOfTheDay(element.pod)}
                        key={index}
                    />
                </div>

            )
        })

    }
    render() {
        return this._renderCurrentWeatherResults();
    }

}

export default CurrentWeather;

