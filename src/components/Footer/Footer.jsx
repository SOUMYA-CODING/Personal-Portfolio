import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <footer className='bg-dark text-center text-light py-3'>
                <section className="footer-icons">
                    <a href="https://github.com/SNH-CODING" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://g.dev/soumyaprakashsahu" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-google"></i></a>
                    <a href="https://www.linkedin.com/in/soumya-prakash-sahu-68886921b/" rel="noopener noreferrer" target="_blank"><i
                        className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/soumyap24717773" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://dev.to/soumyaprakashsahu" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-dev"></i></a>
                </section>
                &copy; 2022 Built and designed by <a href="./Human.txt">Soumya Prakash Sahu</a>
            </footer>
        </>
    )
}

export default Footer