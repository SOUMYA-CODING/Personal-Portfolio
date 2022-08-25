import React from 'react'
import { motion } from 'framer-motion'

const Project_1 = () => {
    return (
        <>
            <section id="project-details-page">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}

                    className="project-details-page-wrapper container">
                    <section>
                        <h3 className="header-title">Silicon Guest House</h3>
                        <span className='my-3 small-description-section'>
                            <span className='description'>
                                <strong>ROLE :</strong>
                                <br />
                                <p>Full Stack Developer</p>
                            </span>

                            <span className='divider'></span>

                            <span className='description'>
                                <strong>CONTEXT :</strong>
                                <br />
                                <p>Website Development</p>
                            </span>

                            <span className='divider'></span>

                            <span className='description'>
                                <strong>COMPLETION TIME :</strong>
                                <br />
                                <p>16 Days</p>
                            </span>
                        </span>

                        <div className='tech my-3'>
                            <p>Html</p>
                            <p>Css</p>
                            <p>bootstrap</p>
                            <p>django</p>
                            <p>mysql</p>
                        </div>
                    </section>

                    <section className='project-image mt-4'>
                        <img src="assets/projects/guest_house-4.png" alt="" />
                    </section>

                    <section className='project-introduction my-5'>
                        <h3 className="header-title mb-3">Introduction</h3>
                        <p>
                            Guest House project was built for Silicon Institute of Technology to manage their guest
                            house booking through a website. It helps their guests and students to book a room easily through
                            a website rather than going to counter for booking. It has a very simple UI design which helps
                            them to access it easily.
                        </p>

                        <a href="https://github.com/SNH-CODING/Silicon-Guest-House" rel="noopener noreferrer" target='_blank' className='mt-3'>
                            View Code
                            <svg class="btn-arrow" width="42" height="24" viewBox="0 0 62 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </section>

                    <section className='project-description my-5'>
                        <section>
                            <h2 className="mb-3">An elegent design</h2>
                            <hr />
                            <p>
                                As a Full Stack Developer, i was responsible for building the entire Website.
                                My main task to build this website elegent, responsive and full functions.
                                <br /><br />
                                This website also includes a custom admin dashboard, including a responsive theme,
                                a custom flex grid system, custom form validation and more.
                            </p>
                        </section>
                        <section>
                            <img src="assets/projects/guest_house-2.png" alt="" className='image' />
                        </section>
                    </section>

                    <section className='project-design my-5'>
                        <h3 className="header-title mb-3 text-center">Design</h3>
                        <img src="assets/projects/guest_house-3.png" alt="" />
                    </section>
                </motion.div>
            </section>
        </>
    )
}

export default Project_1