import React, {
  Component
} from 'react';
import uuid from 'uuid';

import City from './components/City/City';
import CityForecastedTempList from './components/City/CityForecastedTempList';
import InputCity from './components/Input/InputCity'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchCity: 'Warszawa',
      temperatureData: [],
      forecastedWeatherUrl: 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + "'searchCity'" + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    }

  }

  componentDidMount() {
    let city = this.state.searchCity;
    const currentWeatherUrl = 'https://api.weatherbit.io/v2.0/current?city=' + city + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    console.log(currentWeatherUrl);
  }

  getCurrenrWeather() {
    let city = this.state.searchCity;
    const currentWeatherUrl = 'https://api.weatherbit.io/v2.0/current?city=' + city + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    console.log(currentWeatherUrl);
  }

  getForecastedWeather() {
    let city = this.state.searchCity;
  }

  searchCityHandler = (event) => {
    if (event.keyCode === 13) {
      if (!event.target.value) {
        this.setState({
          searchCity: 'Warszawa'
        });
      } else {
        this.setState({
          searchCity: event.target.value
        });
      }

    }
  }

  render() {
    let city = this.state.searchCity;

    console.log(this.state.searchCity);
    return ( 
    <div>
      <h4> Wpisz miasto </h4> 
      <InputCity city = { this.searchCityHandler } /> 
      <City tekst = { city } />
    </div> 
    );
  }
}

export default App;