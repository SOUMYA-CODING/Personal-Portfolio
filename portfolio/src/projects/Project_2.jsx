import React from 'react'
import { motion } from 'framer-motion'

const Project_2 = () => {
    return (
        <>
            <section id="project-details-page">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}

                    className="project-details-page-wrapper container">
                    <section>
                        <h3 className="header-title">Ecommerce For Artisans</h3>
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
                                <p>Under Development | Not Completed</p>
                            </span>
                        </span>

                        <div className='tech my-3'>
                            <p>react js</p>
                            <p>Flutter</p>
                            <p>Html</p>
                            <p>Css</p>
                            <p>sass</p>
                            <p>bootstrap</p>
                            <p>django rest framework</p>
                            <p>mysql</p>
                            <p>framer motion</p>
                        </div>
                    </section>

                    <section className='project-image mt-4'>
                        <img src="assets/projects/ecommerce_artisans-4.png" alt="" />
                    </section>

                    <section className='project-introduction my-5'>
                        <h3 className="header-title mb-3">Introduction</h3>
                        <p>
                            The Indian handicraft and handloom industry engages over 23 million craftsmen. But some ecommerce platforms don't allow artisans to sell or promote their products online or globally.
                            That’s why we see a smaller number of products on handlooms or handmade products.
                            <br />
                            So I develop a cross-platform e-commerce marketplace for craftsmen, artisans to make markets, sell high-quality handicrafts and goods.
                            This platform will help them to grow and promote the Indian handicraft
                            industry globally. A single e-commerce platform will allow buyers and
                            sellers to meet at one platform for business.

                        </p>

                        <a href="https://github.com/SNH-CODING/Ecommerce-For-Artsians" rel="noopener noreferrer" target='_blank' className='mt-3'>
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
                                As a Full Stack Developer, I was responsible for building the entire Website.
                                My main idea is to build this website elegant, responsive and with full functions, which helps the artisans to manage their products,
                                and also attractive for the customer, basically a clean UI/UX design.
                            </p>
                        </section>
                        <section>
                            <img src="assets/projects/ecommerce_artisans-2.png" alt="" className='image' />
                        </section>
                    </section>

                    <section className='project-design my-5'>
                        <h3 className="header-title mb-3 text-center">Design</h3>
                        <img src="assets/projects/ecommerce_artisans-3.png" alt="" />
                    </section>
                </motion.div>
            </section>
        </>
    )
}

export default Project_2