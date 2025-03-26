import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    return (
        <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
                <button className="service-card" onClick={() => navigate("/wedding-catering")}>
                    <h3>Wedding Catering</h3>
                    <p>We provide the best catering services for weddings.</p>
                </button>
                <button className="service-card" onClick={() => navigate("/corporate-events")}>
                    <h3>Corporate Events</h3>
                    <p>Professional catering for corporate events.</p>
                </button>
                <button className="service-card" onClick={() => navigate("/private-parties")}>
                    <h3>Private Parties</h3>
                    <p>Make your private parties memorable with our services.</p>
                </button>
                <button className="service-card" onClick={() => navigate("/birthday-parties")}>
                    <h3>Birthday Parties</h3>
                    <p>Make your Birthday's more memorable with our services.</p>
                </button>
                <button className="service-card" onClick={() => navigate("/home-catering")}>
                    <h3>Home Catering</h3>
                    <p>Our Home Catering brings you freshly prepared, hygienic, and flavorful dishes made with love.</p>
                </button>
                <button className="service-card" onClick={() => navigate("/bbq-catering")}>
                    <h3>BBQ Catering</h3>
                    <p>Enjoy a mouthwatering BBQ experience with our top-notch catering service!</p>
                </button>
            </div>
        </section>
    );
};

export default Services;
