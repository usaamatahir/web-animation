import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h2>A little Effort By Usama Tahir</h2>
            <a href="https://github.com/usaamatahir/web-animation" target="blank">
                <img src={require("./github.svg")} alt="github"/>
            </a>
        </div>
    )
}

export default Footer;