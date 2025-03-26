import React from "react";
import "./Style/Catering.css";
import HomeCaterers from "../data/HomeCatering.json"; // Import the JSON file
import CateringCard from "../components/CateringCard"; // Import the CateringCard component

const HomeCatering = () => {
    return (
        <div className="home-container">
            {/* Hero Section with Background Image */}
            <div className="hero-section">
                <h1>Home Catering Services</h1>
                <p>Make your get together's an unforgettable experience with our exquisite catering services.</p>
            </div>

            {/* Horizontal Caterers List */}
            <div className="caterers-list">
                {HomeCaterers.map((caterer) => (
                    <CateringCard key={caterer.id} caterer={caterer} />
                ))}
            </div>

            {/* Contact Section */}
            <div className="contact-section">
                <h2>Book Our Services</h2>
                <p>Contact us today to plan your dream get together!</p>
                <button className="contact-btn">Get a Quote</button>
            </div>
        </div>
    );
};

export default HomeCatering;