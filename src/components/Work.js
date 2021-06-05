import React from "react"
import campsite from "../images/campsite.png"
import movieapp from "../images/movieapp.png"
import nemipizza from "../images/nemipizza.png"

const Work = () => {
    return (
        <div className="portfolio-wrapper bg-gray">
            <div className="container">
                <h1 className="py-5 text-center"><b>Portfolio</b></h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="col-md-4">
                    <div className="portfolio-image-box">
                        <img src={nemipizza} alt="Nemi Pizza" className="portfolio-image" />
                        <div className="overflow"></div>

                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="portfolio-image-box">
                        <img src={movieapp} alt="Movie App" className="portfolio-image" />
                        <div className="overflow"></div>
                        
                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="portfolio-image-box">
                        <img src={campsite} alt="campsite" className="portfolio-image" />
                        <div className="overflow"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
