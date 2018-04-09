import React, { Component } from 'react';


import CityForecastedTempList from './components/City/CityForecastedTempList';
import InputCity from './components/Input/InputCity'



class App extends Component {

state = {
  searchCity: '',
  tempData: []
}


searchCityHandler = (event) => {
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
        <InputCity city = {this.searchCityHandler}  />
        <CityForecastedTempList tekst = {city} />  
          
      </div> 
    );
  }
}

export default App;
