import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            username: formData.name,
            email: formData.email,
            message: formData.message,
            userId: 1 // replace with actual userId from props or session if needed
        };

        try {
            await axios.post('http://localhost:8080/feedback', payload, {
                withCredentials: true, // if you are using cookies/session
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting contact form:', error);
            alert('There was an error submitting your message.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Submit Feedback</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                {!isSubmitted ? (
                    <button type="submit">Send Message</button>
                ) : (
                    <p className="success-message">Response submitted successfully!</p>
                )}
            </form>
        </section>
    );
};

export default ContactForm;
