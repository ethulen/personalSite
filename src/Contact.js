// Contact.js

import React, { useState } from "react";
import './styles.css';
import treeline from './treeline.jpg'

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const Contact = () => {
    const heroStyle = {
        backgroundImage: `url(${treeline})`,
        backgroundSize: 'cover', // Adjust this property to fit your needs
        backgroundPosition: 'center', // Adjust this property to fit your needs
        color: 'white', // Adjust the text color based on your background
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    };
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response was not ok');
                }

                setSubmitted(true);
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
            });
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div style={heroStyle}>
            <div className="contact-wrapper">
                <section id="contact" className="contact-section py-5">
                    <div className="col-md-6 contact-info">
                        <h4>Contact Information</h4>
                        <p><strong>Email:</strong> ethulen01@gmail.com</p>
                        <p><strong>Phone:</strong> (913) 231-1170</p>
                    </div>
                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <div className="pt-0 mb-3 textbox">
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                                required
                            />
                        </div>
                        <div className="pt-0 mb-3 textbox">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                                required
                            />
                        </div>
                        <div className="pt-0 mb-3 textbox">
                            <textarea
                                placeholder="Your message"
                                name="message"
                                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                                required
                            />
                        </div>
                        <div className="pt-0 mb-3">
                            <button
                                className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
                                type="submit"
                            >
                                Send a message
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;
