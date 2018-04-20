import React, { Component } from 'react';
import axios from 'axios';

import style from '../containers/App.css';
import InputCity from '../components/Input/InputCity'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ForecastWeather from '../components/Weather/ForecastWeather';

import { FORECAST_DAILY_API, API_KEY } from '../Tools/weatherAPI';


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
        return (
            <div className={style.App}>
                <Header />
                <InputCity
                    city_name={this.state.searchCity}
                    onSearchCity={(event) => this.onSearchCityHandler(event)}
                    clicked={(event) => this.onSearchCityHandler(event)}
                />
                <div className={style.test} >
                    <ForecastWeather 
                    data={this.state.data} 
                    
                    />
                </div>
                <Footer />
            </div >
        );
    }
}

export default App;
