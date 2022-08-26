import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
    // For Dark Mode
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


    // For Navbar
    const navBar = document.querySelectorAll(".nav-link");
    const navCollapse = document.getElementById("navbarNav");
    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        })
    });

    const project_nav_link = [
        {
            name: "Home",
            link: "/"
        }
    ]

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
                            {
                                project_nav_link.map((list) => {
                                    return (
                                        <li className="nav-item">
                                            <Link to={list.link} className='nav-link'>{list.name}</Link>
                                        </li>
                                    );
                                })
                            }
                            <li className="nav-item">
                                <button className="nav-link" href='#' id='modeIcon' onClick={lightdarkmode}><i className="fa-solid fa-sun"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </motion.section>
    );
}

export default Header;