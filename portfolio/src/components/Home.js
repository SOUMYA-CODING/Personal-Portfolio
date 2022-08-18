import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {

    return (
        <motion.section
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.3, type: 'tween', ease: "easeInOut", /*yoyo: 10*/ }}

            id="home-page">
            <div className="home-page-wrapper container">
                <section>
                    <h3>Hello! there I'am,</h3>
                    <h4>SOUMYA PRAKASH SAHU</h4>
                    <h1>- Full stack developer</h1>
                    <p className='mb-5'>
                        I am a developer specializing in building exceptional digital experience. My target is to create
                        user-friendly applications and try to give best experience.
                    </p>
                    <a href="#about-page" className="custome-btn">
                        About Me
                        <svg class="btn-arrow" width="42" height="24" viewBox="0 0 62 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z"
                                fill="white" />
                        </svg>
                    </a>
                    <div class="scroll-ind">
                        <div class="mouse">
                            <div class="wheel"></div>
                        </div>
                        <div>
                            <span class="m_scroll_arrows unu"></span>
                            <span class="m_scroll_arrows doi"></span>
                            <span class="m_scroll_arrows trei"></span>
                        </div>
                    </div>
                </section>
            </div>
        </motion.section>
    )
}

export default Home