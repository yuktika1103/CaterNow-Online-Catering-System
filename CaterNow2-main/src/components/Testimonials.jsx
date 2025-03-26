import React from 'react';


const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p>"Amazing service! The food was delicious and the staff was very professional."</p>
                    <h3>- Anonymous</h3>
                </div>
                <div className="testimonial-card">
                    <p>"Best catering service in town. Highly recommended!"</p>
                    <h3>- Anonymous</h3>
                </div>
                <div className="testimonial-card">
                    <p>"Exceptional service with delicious, fresh, and perfectly prepared food—highly recommended!"</p>
                    <h3>- Anonymous</h3>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;