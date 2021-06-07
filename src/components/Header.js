import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        // Beginning of header area
        <section id="Home" className="bg-dark text-center">
            <div className="container header-wrapper">
                <div className="row justify-content-center">
                    <div className="col-md-10 main-info">
                        <h1><b>Hi, I'm Jake</b></h1>
                        <br />

                        {/* Typed Script */}
                        <h5><Typed 
                            className="typed-text"
                            strings={["Full-Stack Web Developer", "Software Engineer", "UI/UX Designer", "Mobile Developer", "Programmer", "\"Hacker\"", "Friend"]}
                            typeSpeed={130}
                            backSpeed={90}
                            loop />
                        </h5>
                        
                        {/* Resume Button */}
                        <a href="/JakeRodResume.pdf" class="btn btn-resume btn-default btn-light">
                            {/* Add Link to Resume then delete this comment */}
                            <b>View Resume</b>
                        </a>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
