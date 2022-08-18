import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.section
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.3, type: 'tween' }}

            className="header-wrapper">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    {/* ----- Website Logo ----- */}
                    <a href="#index" className="navbar-brand">
                        <svg width="75" height="50" viewBox="0 0 75 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_39_49)">
                                <g filter="url(#filter0_d_39_49)">
                                    <rect x="33" y="6" width="35" height="11" rx="5.5" fill="#F0F8FF" />
                                </g>
                                <g filter="url(#filter1_d_39_49)">
                                    <rect x="33" y="20" width="21" height="10" rx="5" fill="#F0F8FF" />
                                </g>
                                <g filter="url(#filter2_d_39_49)">
                                    <rect x="19" y="33" width="35" height="11" rx="5.5" fill="#F0F8FF" />
                                </g>
                                <g filter="url(#filter3_d_39_49)">
                                    <rect x="7" y="33" width="10" height="11" rx="5" fill="#F0F8FF" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_39_49" x="29" y="6" width="43" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <filter id="filter1_d_39_49" x="29" y="20" width="29" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <filter id="filter2_d_39_49" x="15" y="33" width="43" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <filter id="filter3_d_39_49" x="3" y="33" width="18" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_49" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_49" result="shape" />
                                </filter>
                                <clipPath id="clip0_39_49">
                                    <rect width="75" height="50" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    {/* ----- Hamburger Icon ----- */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="assets/icons/icon_menu.png" alt="" />
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
                            {/**
                            <li className="nav-item">
                                <a className="nav-link" href="#blog-page">Blog</a>
                            </li>
                             */}
                            <li className="nav-item">
                                <a className="nav-link" href="#contact-page">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="fa-solid fa-sun"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </motion.section>
    );
}

export default Header;