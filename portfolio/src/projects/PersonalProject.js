import React from 'react'

const PersonalProject = () => {
    return (
        <>
            <section id="project-details-page">
                <div className="project-details-page-wrapper container">
                    <section className='description-part'>
                        <section className='description-body'>
                            <h3 className="header-title">Silicon Guest House</h3>
                            <p className='project-title mb-5'>A guest house website</p>
                            <p>
                                Guest House project was built for Silicon Institute of Technology to manage their guest
                                house booking through a website. It helps their guests and students to book a room easily through
                                a website rather than going to counter for booking. It has a very simple UI design which helps
                                them to access it easily.
                                <br />
                                It also contains an admin panel which helps the authorities to monitor the booking.
                            </p>
                            <a href="/" className='mt-3'>
                                View Code
                            </a>
                        </section>
                        <section className='description-image'>
                            <img src="assets/projects/guest_house-2.png" alt="" />
                        </section>
                    </section>

                    <section className='role-description mt-5'>
                        <h3 className="header-title">My Role</h3>
                        <p className='mt-3'>
                            As a Full Stack Developer , i was responsible for
                            building the entire Website with good UI/UX design.
                            I have build this website using Django Framework, HTML5, CSS3,
                            JavaScript and Bootstrap. For the database i have use MySQL.
                            <br />
                            It's a fully responsive website, which properly works in both web and mobile view.
                            It took me around 16 days to complete the whole project.
                        </p>
                    </section>
                </div>
            </section>
        </>
    )
}

export default PersonalProject