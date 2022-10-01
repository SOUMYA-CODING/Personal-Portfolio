import React from 'react'
import './DetailedProject.scss'

const Project_4 = () => {
    return (
        <>
            <section id='project-details-page'>
                <div className="project-details-wrapper">
                    <div className='container'>
                        {/* Tech */}
                        <section className='mb-5'>
                            <h3 className="header-title">Uttarakhand Tourism (Tourism App)</h3>
                            <span className='my-3 small-description-section'>
                                <span className='description'>
                                    <strong>ROLE :</strong>
                                    <br />
                                    <p>App Developer</p>
                                </span>

                                <span className='divider'></span>

                                <span className='description'>
                                    <strong>CONTEXT :</strong>
                                    <br />
                                    <p>App Development</p>
                                </span>

                                <span className='divider'></span>

                                <span className='description'>
                                    <strong>COMPLETION TIME :</strong>
                                    <br />
                                    <p>Under Development</p>
                                </span>
                            </span>

                            <div className='tech my-3'>
                                <p>Flutter</p>
                                <p>Firebase</p>
                            </div>
                        </section>

                        {/* Image */}
                        <section className='project-image mb-5'>
                            <img src="assets/project-4/tourism-4.png" alt="" />
                        </section>

                        {/* Introduction */}
                        <section className='project-introduction mb-5'>
                            <h3 className="header-title mb-3">Introduction</h3>
                            <p>
                                Airbnb is travel and tourism website. Where you can find holiday rentals, cabins, beach house,
                                unique homes and experiences around the world all made possible by Hosts on Airbnb.
                            </p>

                            <a href="https://github.com/SNH-CODING/airbnb-clone" rel="noopener noreferrer" target='_blank' className='mt-3'>
                                View Code
                                <svg class="btn-arrow" width="42" height="24" viewBox="0 0 62 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </section>

                        {/* Description */}
                        <section className='project-description mb-5'>
                            <section>
                                <h2 className="mb-3">A functional REST API</h2>
                                <hr />
                                <p>
                                    As a Backend Developer, I was responsible for building the REST API for the website.
                                    Here the filter option is also available according to some category or country.
                                </p>
                            </section>
                            <section>
                                <img src="assets/project-4/tourism-2.png" alt="" className='image' />
                            </section>
                        </section>

                        {/* Design */}
                        <section className='project-design mb-5'>
                            <h3 className="header-title mb-3 text-center">Design</h3>
                            <img src="assets/project-4/tourism-3.png" alt="" />
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project_4