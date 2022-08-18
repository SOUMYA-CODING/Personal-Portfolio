import React from 'react'

const Contact = () => {
    return (
        <section id="contact-page">
            <div className="contact-page-wrapper container">
                <h3 className="header-title">
                    Contact Me.
                </h3>

                <section className='my-5'>
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
                </section>
            </div>
        </section>
    )
}

export default Contact