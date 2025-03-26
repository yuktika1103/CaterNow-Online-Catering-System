import React from 'react';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Welcome to CaterNow</h1>
                <p>Your one-stop solution for all catering needs.</p>
                <button className="cta-button" onClick={() => navigate("/login")}>Get Started</button>
            </div>

        </section>
    );
};

export default HeroSection;