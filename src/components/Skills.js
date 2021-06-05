import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode, faTree } from "@fortawesome/free-solid-svg-icons"


const Skills = () => {
    return (
        <div className="skills bg-gray text-center">

            {/* Skills Container */}
            <div className="container py-5">
                <div className="row">

                    {/* Back-End skills */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <br />
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h4><b>Back-End</b></h4>
                            <br />
                            <p className="skills-p">Node.js
                            <br />MongoDB
                            <br />Python
                            <br />Express
                            <br />MySQL
                            <br />AWS

                            </p>
                        </div>
                    </div>
                    
                    {/* Front-End skills */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                        <br />

                        <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h4><b>Front-End</b></h4>
                            <br />
                            <p className="skills-p">HTML/CSS
                            <br />Javascript
                            <br />React
                            <br />React Native
                            <br />Bootstrap
                            <br />jQuery
                            </p>
                        </div>
                    </div>

                    {/* Life skills */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                        <br />

                        <div className="circle"><FontAwesomeIcon className="icon" icon={faTree} size="2x" /></div>

                            <h4><b>Real-Life</b></h4>
                            <br />
                            <p  className="skills-p">Amateur Pilot
                            <br />Amateur Cook
                            <br />Amateur Coach
                            <br />Amateur Explorer
                            <br />Amateur Gardener
                            <br />Professional Developer

                            </p>                        
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills
