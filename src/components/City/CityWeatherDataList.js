import React , {Component } from 'react';
import City from './City';

class CityWeatherDataList extends Component {

getTempData() {
    return this.props.tempData.map(element => 
        <City data = {element} key = {element.id} />
    );
}
 render() {
    return( 
        <div> { this.getTempData} </div>
    )
        
    
 }
}

export default CityWeatherDataList;