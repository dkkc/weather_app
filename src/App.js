import React, { Component } from 'react';
import City from './components/City/City';
import InputCity from './components/Input/InputCity'



class App extends Component {

state = {
  searchCity: ''
}


searchCityHandler = (event) => {
  if(event.keyCode === 13) {
  
    this.setState({
      searchCity: event.target.value 
    })

  }
  
}

  render() {
    const city = this.state.searchCity;
    console.log(this.state.searchCity);
    return (
      <div>
        <h4> Wpisz miasto </h4>
        <InputCity city = {this.searchCityHandler}  />
        <City tekst = {city} />  
          
      </div> 
    );
  }
}

export default App;
