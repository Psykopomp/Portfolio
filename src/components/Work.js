import React from "react"
import campsite from "../images/campsite.png"
import movieapp from "../images/movieapp.png"
import nemipizza from "../images/nemipizza.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


const Work = () => {


    return (
        <div id="Work" className="portfolio portfolio-wrapper bg-gray">
            <div className="container">
                <h1 className="p-5 text-center after-line-work"><b>Portfolio</b></h1>
                <div className="image-box-wrapper row">

                    <div className="col-md-4">
                    <div className="portfolio-image-box">
                        <a type="button" href="https://github.com/Psykopomp"><img src={nemipizza} alt="Nemi Pizza" className="portfolio-image" /></a>
                        <div className="overflow"></div>
                    </div>
                    <div className="circle">
                        <a type="button" href="https://github.com/Psykopomp/NemiPizza"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a>
                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="portfolio-image-box">
                        <a type="button" href="https://github.com/Psykopomp"><img src={movieapp} alt="Movie App" className="portfolio-image" /></a>
                        <div className="overflow"></div>
                    </div>
                    <div className="circle">
                        <a type="button" href="https://github.com/Psykopomp/MovieAppV2"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a>
                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="portfolio-image-box">
                        <a type="button" href="https://github.com/Psykopomp"><img src={campsite} alt="campsite" className="portfolio-image" /></a>
                        <div className="overflow"></div>
                    </div>
                    <div className="circle">
                        <a type="button" href="https://github.com/Psykopomp/nucampsiteReact"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a>
                    </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
