import React from "react";
import { useNavigate } from "react-router-dom";
import "./CateringDetails.css";

const CateringDetails = ({ caterer }) => {
    const navigate = useNavigate();

    if (!caterer) {
        return <h2>Caterer Not Found</h2>;
    }

    return (
        <div className="catering-details">
            {/* Container for image and details */}
            <div className="image-and-details">
                {/* Left Side: Image */}
                <img src={caterer.image} alt={caterer.name} className="caterer-image" />

                {/* Right Side: Details */}
                <div className="details-container">
                    <h1>{caterer.name}</h1>
                    <p className="rating">⭐ {caterer.rating}</p>
                    <p className="location">{caterer.location}</p>
                    <p className="description">{caterer.description}</p>
                </div>
            </div>

            {/* Packages Section */}
            <div className="packages-section">
                <h1>Top 3 Packages</h1>
                <div className="packages">
                    {caterer.packages.map((pkg, index) => (
                        <div key={index} className="package">
                            <h4>{pkg.name}</h4>
                            <p>{pkg.details}</p>
                            <p className="price">{pkg.price}</p>
                            <button
                                className="book-now-btn"
                                onClick={() =>
                                    navigate("/customize", {
                                        state: { caterer, pkg },
                                    })
                                }
                            >
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Offers Section */}
            <div className="offers-section">
                <h4>Offers</h4>
                {caterer.offers.map((offer, index) => (
                    <p key={index} className="offer">
                        ✔ {offer}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CateringDetails;