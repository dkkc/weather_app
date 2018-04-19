import React from 'react';
import classes from './Header.css';
import logo from './weather_world.png';

const Header = (props) => {
    return (
        <header className= {classes.Header}>
            <img src = {logo} alt = 'logo' />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>    
            </nav>
        </header>
    )
}

export default Header;