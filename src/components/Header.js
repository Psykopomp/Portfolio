import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        // Beginning of header area
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm Jake</h1>
                <br />

                {/* Typed Script */}
                <h3><Typed 
                    className="typed-text"
                    strings={["Web Developer", "Software Engineer", "UI/UX Designer", "Programmer", "Friend"]}
                    typeSpeed={80}
                    backSpeed={70}
                    loop />
                </h3>
                
                {/* Resume Button */}
                <button class="btn btn-default btn-light">
                    <b>View Resume</b>
                </button>            
            </div>
        </div>
    )
}

export default Header
