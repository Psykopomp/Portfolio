import React from "react"
import logo from "../logo.png"
import { Link } from "react-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    return (
        <>
            {/* Navbar beginning */}
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">

                {/* Logo */}
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                
                {/* Mobile Menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link smooth={true} to="Home" className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="About" className="nav-link" offset={-100} href="#">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth={true} to="Work" className="nav-link" offset={-100} href="#">Work</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar
