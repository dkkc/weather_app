import React, { Component } from 'react';


import CityForecastedTempList from './components/City/CityForecastedTempList';
import InputCity from './components/Input/InputCity'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchCity: '',
      temperatureData: [],
      currentWeatherUrl = 'https://api.weatherbit.io/v2.0/current?city=' + searchCity +'&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c',
      forecastedWeatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + searchCity +'&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    }

  }

getCurrenrWeather = () => {

}

getForecastedWeather = () => {

}

onSearchCityHandler = (event) => {
  if(event.keyCode === 13) {
  
    this.setState({
      searchCity: event.target.value 
    })

  }
  
}

  render() {
    let city = this.state.searchCity;
    
    console.log(this.state.searchCity);
    return (
      <div>
        <h4> Wpisz miasto </h4>
        <InputCity city = {this.onSearchCityHandler}  />
        
          
      </div> 
    );
  }
}

export default App;
