import React, {Component}  from 'react';
import uuid from 'uuid';
import axios from 'axios';

import classes from '../components/Weather/Weather.css';
import style from '../containers/App.css';
import InputCity from '../components/Input/InputCity'
import Header from '../components/Header/Header';
import Weather from '../components/Weather/Weather';
import WeatherDetails from '../components/Weather/WeatherDetails';
import Footer from '../components/Footer/Footer';

import { getDay } from '../Tools/Date';

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
        
       let city = this.state.searchCity;
        const data = this.state.data.map((ele , id) => {
            let iconCode = ele.weather.icon;
            let newIconCode = iconCode.slice(1 ,4); // slice to get OpenWeatherMap icons
            console.log(ele.app_max_temp , ele.datetime , iconCode , newIconCode);
            let icon = 'https://www.weatherbit.io/static/img/icons/' + ele.weather.icon + '.png';
            let newIcon = 'http://openweathermap.org/img/w/' +newIconCode+   '.png' // OpenWeatherMap weather icon
            let weekDay = new Date(ele.datetime)
            let day = getDay(weekDay);
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
                <div className = "test">
                    {data} 
                </div>
                <Footer />  
            </div >          
        );
    }
}

export default App;
