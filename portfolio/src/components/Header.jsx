import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const ProjectHeader = () => {
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


    // Nav items to render in home page
    const default_nav_link = [
        {
            name: "Home",
            link: "#home-page"
        },
        {
            name: "About Me",
            link: "#about-page"
        },
        {
            name: "Skills",
            link: "#skill-page"
        },
        {
            name: "Projects",
            link: "#project-page"
        },
        {
            name: "Contact",
            link: "#contact-page"
        }
    ]

    // Nav items to render in Project Page
    const project_nav_link = [
        {
            name: "Home",
            link: "/"
        }
    ]

    const location = useLocation()
    const path = location.pathname

    const [nav, setNav] = useState([])


    // Without using useEffect useState was not changing the data
    // Useeffect for nav-items
    useEffect(() => {
        navList()
    }, []) // when giving dependency [nav] giving error, without giving dependency means living blank [] then no error occurs but nav-item do not change when going to other page in [] blank dependency. i have to refresh then the items changes

    // Condition when path is "/" the render home page navbar items
    const navList = () => {
        if (path === "/") {
            // const data = ["Home", "About Me", "Skills"]
            const data = default_nav_link.map((list) => {
                return (
                    <li className="nav-item">
                        <a href={list.link} className='nav-link'>{list.name}</a>
                    </li>
                )
            })
            setNav(data)
        } else {

            const data = project_nav_link.map((list) => {
                return (
                    <li className="nav-item">
                        <Link to={list.link} className='nav-link'>{list.name}</Link>
                    </li>
                )
            })
            setNav(data)
        }
    }

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
                            {nav}
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

export default ProjectHeader;