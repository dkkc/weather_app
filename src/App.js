import React, {
    Component
} from 'react';
import uuid from 'uuid';
import axios from 'axios';


import City from './components/City/City';
import CityForecastedTempList from './components/City/CityForecastedTempList';
import InputCity from './components/Input/InputCity'



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchCity: '',
            data: {},
            
        }
        
        
    }



    
    
    getForecastedWeather(city) {
        const url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + city + '&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c'
        console.log('url',url);

         fetch(url)
             .then(response => response.json())
             .then(res => this.setState({ data: res.data}))
             .catch(err => console.log('błąd' , err));
    }

    searchCityHandler = (event) => {
        let city = event.target.value;
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

 componentDidMount(){
    // Make HTTP reques with Axios
    
  }

    render() {
        let city = this.state.searchCity;
        console.log(this.state.searchCity);
        
        let temData = this.state.data;
       console.log('TEMP',temData);
        return ( 
            <div>
                <h4> Wpisz miasto </h4>  
                <InputCity city = { this.searchCityHandler } />     
               <CityForecastedTempList />
                
            </div >
        );
    }
}

export default App;
