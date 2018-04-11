import React, {
  Component
} from 'react';
import uuid from 'uuid';
import axios from 'axios';


import City from './components/City/City';
import CityForecastedTempList from './components/City/CityWeatherDataList';
import InputCity from './components/Input/InputCity'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchCity: '',
      temperatureData: [],
      //forecastedWeatherUrl: 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + "'searchCity'" + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    }

  }

  componentDidMount() {
    let city = this.state.searchCity;
    const currentWeatherUrl = 'https://api.weatherbit.io/v2.0/current?city=' + city + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    console.log(currentWeatherUrl);
  }

  getCurrenrWeather(city) {
    
    const currentWeatherUrl = 'https://api.weatherbit.io/v2.0/current?city=' + city + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    console.log(currentWeatherUrl);
  }

  getForecastedWeather(city) {
    
    const url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + city + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
    fetch(url).then(response => response.json()).then(res => 
      this.setState({ temperatureData: res.data }) );
     
    
    console.log('getForecastedWeather',this.state.temperatureData);
  }

  searchCityHandler = (event) => {
    let city = event.target.value;
    if (event.keyCode === 13) {
      if (!city) {
        this.setState({
          searchCity: 'Warszawa'
        });
      } else {
        this.setState({
          searchCity: city
        });
      }
    }
    
  }



  render() {
    let city = this.state.searchCity;
    console.log(city);
    this.getForecastedWeather(city);
    let tempData = <CityForecastedTempList tempData = {this.state.temperatureData} />; 
    return ( 
    <div>
      <h4> Wpisz miasto </h4> 
      <InputCity city = {(e) => this.searchCityHandler(e) } /> 
      {/* <CityForecastedTempList tempData = {this.state.temperatureData} /> */}
      {tempData}
    </div> 
    );
  }
}

export default App;