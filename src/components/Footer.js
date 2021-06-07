import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'


// Simple contact and linkedin
const Footer = () => {
    return (
        <section className="bg-dark text-center">
            <div className="container header-wrapper">
                <div className="row justify-content-center">
                    <div className="col-md-10 main-footer">
                        <h1><b>Contact</b></h1>
                        <br />
                        <p>Have any questions, comments, or inquiries? 
                        <br/>Feel free to contact me on LinkedIn.</p>
                        <br />
                        <a className="footer-icon"href="https://www.linkedin.com/in/jake-rod"><FontAwesomeIcon className="icon" icon={faLinkedin} size="3x" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
