import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={require('./Image/head4.jpg')} alt="header" />
            <NavBar />
        </div>
    )
}

export default Header;