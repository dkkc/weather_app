import React from 'react';
import City from './City';

const forcastTemp = (props) => {
   return props.tempData.map ((city , index) => {
    return <City tekst = { city } />
   });
}

export default forcastTemp;