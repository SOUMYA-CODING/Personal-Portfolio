import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about-page">
            <div className="about-page-wrapper container">
                <motion.section
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 1, type: 'tween', ease: "easeInOut" }}
                >
                    <img src="assets/base/profile_img.png" alt="" />
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 1, type: 'tween', ease: "easeInOut" }}
                >
                    <h3 className="header-title">
                        About me.
                    </h3>
                    <p className="my-4">
                        Hello!, I am Soumya Prakash Sahu, a <span className="text-highlight">Full Stack Web and Android App Developer</span>,
                        I enjoy solving problems with clean, scalable solutions. I have a genuine passion for inspiring design.
                        <br /><br />
                        I like <span className="text-highlight">challenges</span>, problem solving, creating smart user interface design, developing rich mobile and web
                        applications. My main focus these days is building <span className="text-highlight">accessible, inclusive products</span>.
                        <br /><br />
                        As a developer I love to add clarity to complicated concepts by <span className="text-highlight">developing</span> them.
                    </p>
                    <div className="btn-group">
                        <a href="#contact-page" className='me-2'>
                            Hire Me
                        </a>
                        <a href="https://drive.google.com/file/d/1lGbYQ8LP3BFfEbyYfFLPJso-molTuzEW/view?usp=sharing" target="_blank">
                            Resume
                        </a>
                    </div>
                </motion.section>
            </div>
        </section>
    )
}

export default About