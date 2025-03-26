import React from "react";
import "./CateringCard.css";
import { useNavigate } from "react-router-dom";
const CateringCard = ({ caterer }) => {
    const { id, name, rating, location, image, description } = caterer;
    const navigate = useNavigate();
    return (
        <div className="caterer-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="rating">⭐️ {rating}</p>
            <p className="location">{location}</p>

            <div className="card-overlay">
                <p className="description">{description}</p>
                <button className="book-now-btn" onClick={() => navigate(`/catering/${id}`)}>Book Now</button>
            </div>
        </div>
    );
};

export default CateringCard;