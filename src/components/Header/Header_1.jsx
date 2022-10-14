import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header_1 = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="assets/icons/light_logo.png" alt="Soumya Prakash Sahu | Portfolio Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src="assets/icons/icon_menu.png" alt="" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href='#home-page' className='nav-link'>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#about-page' className='nav-link'>About me</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#experience-page' className='nav-link'>Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#skill-page' className='nav-link'>Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#project-page' className='nav-link'>Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#contact-page' className='nav-link'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header_1