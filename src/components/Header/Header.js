import React from 'react';



const Header = (props) => {
    return (
        <header>
            <nav>
                <img src = {props.url} alt ='logo'>
                </img>

            </nav>
        </header>
    )
}

export default Header;