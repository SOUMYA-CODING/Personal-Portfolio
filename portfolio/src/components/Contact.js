import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact-page">
            <div className="contact-page-wrapper container">
                <motion.h3
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 1, type: 'tween', ease: "easeInOut" }}
                    
                    className="header-title">
                    Contact Me.
                </motion.h3>

                <motion.section
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 1, type: 'tween', ease: "easeInOut" }}

                    className='my-5'>
                    <form action="" autoComplete='off'>
                        <h2>Let's get in touch</h2>
                        <p className='mb-3'>If you would like to discuss any project or inquire, feel free to drop me a message.</p>
                        <div className="mb-3 input-box">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                            <span id="name_error" className="error_span"></span>
                        </div>
                        <div className="mb-3 input-box">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" />
                            <span id="email_error" className="error_span"></span>
                        </div>
                        <div class="mb-3 input-box">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="3"></textarea>
                            <span id="message_error" class="error_span"></span>
                        </div>
                        <button>
                            Send <i class="uil uil-message"></i>
                        </button>
                    </form>
                </motion.section>
            </div>
        </section>
    )
}

export default Contact