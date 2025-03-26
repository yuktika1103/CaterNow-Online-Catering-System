import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BillingInformation.css";

const BillingInformation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { caterer, pkg, quantity, addons, totalPrice } = location.state || {
        caterer: { name: "", image: "" },
        pkg: { name: "" },
        quantity: 0,
        addons: { drinks: "", starter: "", mainDish: "", dessert: "" },
        totalPrice: 0
    };

    const [eventDetails, setEventDetails] = useState({
        date: "",
        time: "",
        venue: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setEventDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validate time format (HH:mm)
        const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(eventDetails.time)) {
            setError("Please enter time in HH:mm format (e.g., 14:30)");
            setLoading(false);
            return;
        }

        const orderData = {
            catererName: caterer.name,
            packageType: pkg.name,
            quantity: Number(quantity),
            drinks: addons.drinks?.count || 0,
            starter: addons.starter?.count || 0,
            mainDish: addons.mainDish?.count || 0,
            dessert: addons.dessert?.count || 0,
            totalPrice: Number(totalPrice),
            eventDate: eventDetails.date,
            eventTime: eventDetails.time,
            eventVenue: eventDetails.venue
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/api/orders",
                orderData,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            );

            if (response.status === 200) {
                navigate("/booking-confirmed", {
                    state: { orderId: response.data.orderId }
                });
            }
        } catch (error) {
            console.error("Order failed:", error);
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="billing-information-container">
            <div className="image-section">
                <img src={caterer.image} alt={caterer.name} className="caterer-image" />
            </div>

            <div className="billing-info-section">
                <h1>Billing Information</h1>

                {error && <div className="error-message">{error}</div>}

                <div className="details-section">
                    <h2>{caterer.name} - {pkg.name}</h2>
                    <p>Number of Plates: {quantity}</p>
                    <p>Total Price: ₹{totalPrice}</p>
                </div>

                <form className="form-section" onSubmit={handleSubmit}>
                    <h3>Event Details</h3>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={eventDetails.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </label>
                    <label>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={eventDetails.time}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Venue:
                        <input
                            type="text"
                            name="venue"
                            value={eventDetails.venue}
                            onChange={handleInputChange}
                            placeholder="Enter venue address"
                            required
                        />
                    </label>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? "Processing..." : "Confirm Booking"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BillingInformation;