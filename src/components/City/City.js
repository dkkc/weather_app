import React from 'react';

const city = (props) => {
    return ( <
        div >
        <
        p > { props.data } < /p> { /* <p> {props.children} </p> */ } { /* <img src = {props.weatherIcon} /> */ } <
        /div>
    )
}

export default city;