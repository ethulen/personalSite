import React, { useState } from "react";
import './styles.css';
import treeline from './treeline.jpg';

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const Contact = () => {
    const heroStyle = {
        backgroundImage: `url(${treeline})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
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
            <div className="text-center">
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </div>
        );
    }

    return (
        <div style={heroStyle}>
            <div className="contact-wrapper">
                <section id="contact" className="contact-section py-5">
                    <div className="contact-info">
                        <h4>Contact Information</h4>
                        <p><strong>Email:</strong> ethulen01@gmail.com</p>
                        <p><strong>Phone:</strong> (913) 231-1170</p>
                    </div>
                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                        className="contact-form"
                    >
                        <div className="textbox">
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="textbox">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="textbox">
                            <textarea
                                placeholder="Your message"
                                name="message"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="button-container">
                            <button
                                className="submit-button"
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
