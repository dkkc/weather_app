import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';

import style from '../containers/App.css';
import InputCity from '../components/Input/InputCity'
import Header from '../components/Header/Header';
import Weather from '../components/Weather/Weather';
import WeatherDetails from '../components/Weather/WeatherDetails';
import Footer from '../components/Footer/Footer';

import { getDay } from '../Tools/Date';
import { getTemp, getWeatherIcon , FORECAST_DAILY_API , API_KEY  } from '../Tools/weatherAPI';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchCity: '',
            data: [],
        }
    }

    getForecastWeather(city) {
        axios.get(FORECAST_DAILY_API + city + '&lang=pl&key=' + API_KEY)
            .then(res => {
                const data = res.data;
                this.setState({
                    searchCity: data.city_name,
                    data: data.data,
                });
            }).catch((error) => {
                alert('Wpisane miasto nie istnieje w naszej bazie danych');
                window.location.reload();
            })

    }

    onSearchCityHandler = (event) => {
        if (event.keyCode === 13) {
            this.setState({
                searchCity: event.target.value
            });

            this.getForecastWeather(event.target.value);
        }
    }

    render() {
        const data = this.state.data.map((ele, id) => {
            return (
                <Weather>
                    <WeatherDetails 
                        day= { getDay(new Date(ele.datetime))}
                        date={ele.datetime}
                        temp={getTemp(ele.max_temp)}
                        url={getWeatherIcon(ele.weather.icon)}
                        description={ele.weather.description}
                        key = {this.state.id}
                    />
                </Weather>
            )
        })

        return (
            <div className={style.App}>
                <Header />
                <InputCity
                    city_name={this.state.searchCity}
                    onSearchCity={(event) => this.onSearchCityHandler(event)}
                    clicked={(event) => this.onSearchCityHandler(event)}
                />
                <div className={style.test}>
                    {data}
                </div>
                <Footer />
            </div >
        );
    }
}

export default App;
