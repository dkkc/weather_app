import React from 'react';
import header from './Header.css';


const Header = (props) => {
    return (
        <header className= "Header">
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