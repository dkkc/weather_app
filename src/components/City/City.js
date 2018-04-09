import React from 'react';

const city = (props) => {
    return (
        <div>
            <h1>{props.tekst}</h1>
            <p> {props.children} </p>
        </div>
    )
}

export default city;