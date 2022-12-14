import React from 'react'
import './Socialicons.scss'

const Socialicons = () => {
    return (
        <section
            className="social-link">
            <img id="arrow" src="assets/icons/light_arrow.png" alt="" />
            <div className="social-icon">
                <section>
                    <a href="https://github.com/SNH-CODING" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://g.dev/soumyaprakashsahu" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-google"></i></a>
                    <a href="https://www.linkedin.com/in/soumya-prakash-sahu-68886921b/" rel="noopener noreferrer" target="_blank"><i
                        className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/soumyap24717773" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://dev.to/soumyaprakashsahu" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-dev"></i></a>
                </section>
            </div>
        </section>
    )
}

export default Socialicons