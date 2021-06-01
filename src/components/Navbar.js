import React from "react"
import logo from "../logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <>
            {/* Navbar beginning */}
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Work</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Life</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar
