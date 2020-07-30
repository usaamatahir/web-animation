import React from 'react';
import Typewriter from 'typewriter-effect';
import './NavBar.css';

const NavBar = () => {

    window.onload = function () {
        var hamburger = document.querySelector(".navIcon");
        var navLinks = document.querySelector(".navigation ul");

        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
    })
    }

    
    return (
        <>
        <div className="navbar">
            <span>
                <img src={require("../Header/Image/LOGO.png")} alt="logo" />
            </span>
            <nav>
                <div className="navIcon" >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="navigation">
                    <ul>
                        <li><a href="./" data-text="Home">Home</a></li>
                        <li><a href="./" data-text="About">About</a></li>
                        <li><a href="./" data-text="Work">Work</a></li>
                        <li><a href="./" data-text="Team">Team</a></li>
                        <li><a href="./" data-text="Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="animationText">
        <Typewriter
                  options={{
                    strings: ["Welcome to Bootcamp 2020   Learn Online, Earn Online"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "h1",
                    cursorClassName: "Typewriter__cursor"
                  }}
                />
                
        </div>
        </>
    )
}

export default NavBar;