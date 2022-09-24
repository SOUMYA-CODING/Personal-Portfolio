import React, { useRef } from 'react'
import './Contact.scss'

import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    // For name
    const nameFunction = (e) => {
        // const name = e.target.name;
        const value = e.target.value;
        console.log(value)
        setName(value);
    }

    // For email
    const emailFunction = (e) => {
        const value = e.target.value;
        console.log(value)
        setEmail(value);
    }

    // For Message
    const messageFunction = (e) => {
        const value = e.target.value;
        console.log(value)
        setMessage(value);
    }

    const form = useRef();

    // Email ID
    const serviceID = 'default_service';
    const templateID = 'template_3oj9jzg';
    const publicKey = 'dnbVopxeOEOG_zWGa';

    // On submit
    const sendFunction = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, publicKey).then(
            (result) => {
                console.log(result.text);
                alert("Successfuly send");
            },
            (error) => {
                console.log(error.text);
                alert("Error")
            }
        );

        e.target.reset();
    }
    return (
        <>
            <section id="contact-page">
                <div className="contact-page-wrapper container">
                    <h3
                        className='header-title'>
                        Contact me.
                    </h3>
                    <section
                        className='my-5'>
                        <form ref={form} action="" autoComplete='off' onSubmit={sendFunction}>
                            <h2>Let's get in touch</h2>
                            <p className='mb-3'>If you would like to discuss any project or inquire, feel free to drop me a message.</p>
                            <div className="mb-3 input-box">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name='from_name' value={name} id="from_name" onChange={nameFunction} required />
                                {/* <span id="name_error" className="error_span"></span> */}
                            </div>
                            <div className="mb-3 input-box">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" name='from_email' value={email} id="from_email" onChange={emailFunction} required />
                                {/* <span id="email_error" className="error_span"></span> */}
                            </div>
                            <div class="mb-3 input-box">
                                <label htmlFor="message" class="form-label">Message</label>
                                <textarea class="form-control" name='message' id="message" value={message} rows="3" onChange={messageFunction} required></textarea>
                                {/* <span id="message_error" class="error_span"></span> */}
                            </div>
                            <button>
                                Send
                            </button>
                        </form>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Contact