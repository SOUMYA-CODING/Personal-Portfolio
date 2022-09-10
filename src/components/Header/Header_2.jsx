import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

import { motion } from 'framer-motion'

const Header_2 = () => {
    return (
        <>
            <motion.header
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.3, type: 'tween', ease: "easeInOut" }}
            >
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
                                    <Link to='/' className='nav-link'>Back to home</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </motion.header>
        </>
    )
}

export default Header_2