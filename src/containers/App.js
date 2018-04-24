import React, { Component } from 'react';
import axios from 'axios';

import style from './App.css';
import InputCity from '../components/Input/InputCity'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ForecastWeather from '../components/Weather/ForecastWeather';
import CurrentWeather from '../components/Weather/CurrentWeather';

import { FORECAST_DAILY_API, API_KEY, CURRENT_WEATHER_BY_IP } from '../Tools/weatherAPI';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchCity: '',
            data: [],
            showForcast: false,
        }
    }

    componentDidMount() {
        axios.get(CURRENT_WEATHER_BY_IP + '&lang=pl&key=' + API_KEY)
        .then(res => {
            const data = res.data;
            this.setState({
                searchCity: data.city_name,
                data: data.data,
            });
            
        }).catch((error) => {
            alert('Nie można odczytać IP użądzenia')
            window.location.reload();

        })
    }

    getForecastWeather(city) {
        axios.get(FORECAST_DAILY_API + city + '&lang=pl&key=' + API_KEY)
            .then(res => {
                const data = res.data;
                this.setState({
                    searchCity: data.city_name,
                    data: data.data,
                });
                console.log(data.city_name);
            }).catch((error) => {
                alert('Wpisane miasto nie istnieje w naszej bazie danych');
                window.location.reload();
            })

    }

    
    _getCurrentWeather = () => {

        axios.get(CURRENT_WEATHER_BY_IP + '&lang=pl&key=' + API_KEY)
            .then(res => {
                const data = res.data;
                this.setState({
                    searchCity: data.city_name,
                    data: data.data,
                });
            }).catch((error) => {
                alert('Nie można odczytać IP użądzenia')
                window.location.reload();

            })

    }

    onCurrentWeather = (event) => {
        event.preventDefault();
        this._getCurrentWeather();
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
       
        return (
            <div className={style.App}>
                <Header />
                <InputCity
                    city_name={this.state.searchCity}
                    onSearchCity={(event) => this.onSearchCityHandler(event)}
                    clicked={(event) => this.onCurrentWeather(event)}
                />
                <div className={style.Test} >
                    <CurrentWeather data={this.state.data} />
                </div>
                {/* <Footer /> */}
            </div >
        );
    }
}

export default App;
