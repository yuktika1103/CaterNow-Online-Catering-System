import React from "react";
import "./Style/Catering.css";
import CorporateCaterers from "../data/CorporateCatering.json"; // Import the JSON file
import CateringCard from "../components/CateringCard"; // Import the CateringCard component

const CorporateCatering = () => {
    return (
        <div className="Corporate-container">
            {/* Hero Section with Background Image */}
            <div className="hero-section">
                <h1>Corporate Events Catering Services</h1>
                <p>Make your wedding day unforgettable with our exquisite catering services.</p>
            </div>

            {/* Horizontal Caterers List */}
            <div className="caterers-list">
                {CorporateCaterers.map((caterer) => (
                    <CateringCard key={caterer.id} caterer={caterer} />
                ))}
            </div>

            {/* Contact Section */}
            <div className="contact-section">
                <h2>Book Our Services</h2>
                <p>Contact us today to plan your dream corporate events!</p>
                <button className="contact-btn">Get a Quote</button>
            </div>
        </div>
    );
};

export default CorporateCatering;