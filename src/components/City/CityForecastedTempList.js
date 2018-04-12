import React, { Component } from 'react';
//import City from './City';
import axios from 'axios';

class CityForecastedTempList extends Component {
    state = {
        data: []
    }

    componentDidMount() {
    axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=Kutno&lang=pl&key=3d6322a9ea164e99830e4e07fa8b5e2c')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

render() {
    return(
        <ul>
        { this.state.data.map(data => <li>{data}</li>)}
      </ul>
    )
}
}

export default CityForecastedTempList;