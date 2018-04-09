import React from 'react';
import City from './City';

const forcastTemp = (props) => {
   return props.cities.map ((city , index) => {
    return <City tekst = { props.tekst } />
   });
}

export default forcastTemp;