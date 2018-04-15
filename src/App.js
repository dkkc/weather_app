import React, {Component}  from 'react';
import uuid from 'uuid';
import axios from 'axios';

import classes from '../src/components/Weather/Weather.css';
import style from './App.css';
import InputCity from './components/Input/InputCity'
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import WeatherDetails from './components/Weather/WeatherDetails';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchCity: '',
            data: [],
            
        }     
    }
    
    getForecastWeather(city) {
        axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city='+ city +'&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c')
        .then(res => {
          const data = res.data;
          this.setState({
              searchCity: data.city_name,
              data : data.data ,
           
          });
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

    onShowWeather = (args) => {
        this.getForecastWeather(args);
    }

    getNameDay = (args) => {
        let  date = new Date(args);
         const days = [];

         days[1] = 'Poniedziałek';
         days[2] = 'Wtorek';
         days[3] = 'Środa';
         days[4] = 'Czwartek';
         days[5] = 'Piątek';
         days[6] = 'Sobota';
         days[0] = 'Niedziela';
         
         let dayofweek = days[date.getDay()];
        
         return dayofweek;
     }
    render() {
       let city = this.state.searchCity;
        const data = this.state.data.map((ele , id) => {
            let iconCode = ele.weather.icon;
            let newIconCode = iconCode.slice(1 ,4); // slice to get OpenWeatherMap icons
            console.log(ele.app_max_temp , ele.datetime , iconCode , newIconCode);
            let icon = 'https://www.weatherbit.io/static/img/icons/' + ele.weather.icon + '.png';
            let newIcon = 'http://openweathermap.org/img/w/' +newIconCode+   '.png' // OpenWeatherMap weather icon
            let weekDay = new Date(ele.datetime)
            let day = this.getNameDay(weekDay);
            let temp = ele.max_temp + '°C';
            return (
                <Weather>   
                    <WeatherDetails 
                        day = {day} 
                        date = {ele.datetime}
                        city = {this.state.searchCity}
                        temp = {temp}
                        url = {icon}
                        description = {ele.weather.description} 
                         
                    />
                </Weather>
            )  
        })
       
        return ( 
            <div className = "App">
                <Header /> 
                <InputCity 
                city_name = {city}
                city = {(event) => this.onSearchCityHandler(event) } 
                clicked = {(event) => this.onSearchCityHandler(event)}
                />     
                {data} 
                
            </div >
        );
    }
}

export default App;
