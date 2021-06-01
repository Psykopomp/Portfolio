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
                <h5><Typed 
                    className="typed-text"
                    strings={["Full-Stack Web Developer", "Software Engineer", "UI/UX Designer", "Programmer", "Friend"]}
                    typeSpeed={130}
                    backSpeed={90}
                    loop />
                </h5>
                
                {/* Resume Button */}
                <button class="btn btn-main-info btn-default btn-light">

                    {/* Add Link to Resume then delete this comment */}
                    <b>View Resume</b>
                </button>  

            </div>
        </div>
    )
}

export default Header
