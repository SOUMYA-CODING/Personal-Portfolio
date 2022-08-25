import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
    const [theme, setTheme] = useState("dark-mode");

    const lightdarkmode = () => {
        if (theme === "dark-mode") {
            setTheme("light-mode")

            document.getElementById("brand_icon").src = "assets/icons/svg_dark_logo.svg"
            document.getElementById("arrow").src = "assets/icons/dark_arrow.png"
            document.getElementById("hamburger_menu").src = "assets/icons/icon_menu_dark.png"
        } else {
            setTheme("dark-mode")

            document.getElementById("brand_icon").src = "assets/icons/svg_light_logo.svg"
            document.getElementById("arrow").src = "assets/icons/light_arrow.png"
            document.getElementById("hamburger_menu").src = "assets/icons/icon_menu.png"
        }
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])


    const navBar = document.querySelectorAll(".nav-link");
    const navCollapse = document.getElementById("navbarNav");
    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        })
    });

    return (
        <motion.section
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.3, type: 'tween', ease: "easeInOut" }}

            className="header-wrapper">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    {/* ----- Website Logo ----- */}
                    <Link to="/" className="navbar-brand">
                        <img id='brand_icon' src="assets/icons/svg_light_logo.svg" alt="" />
                    </Link>

                    {/* ----- Hamburger Icon ----- */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img id='hamburger_menu' src="assets/icons/icon_menu.png" alt="" />
                    </button>

                    {/* ----- Navbar Menu ----- */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home-page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about-page">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skill-page">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project-page">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-page">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id='modeIcon' onClick={lightdarkmode}><i className="fa-solid fa-sun"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </motion.section>
    );
}

export default Header;