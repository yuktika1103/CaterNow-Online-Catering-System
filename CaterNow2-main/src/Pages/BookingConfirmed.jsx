import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Style/BookingConfirmed.css";

const BookingConfirmed = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const orderId = location.state?.orderId;

    return (
        <div className="booking-confirmed-container">
            <h1>Booking Confirmed</h1>
            {orderId && <p>Your Order ID: {orderId}</p>}
            <p>Thank you for booking our catering service</p>
            <p>We'll see you shortly</p>
            <p>A confirmation email has been sent to your registered email address.</p>
            <button
                className="ok-button"
                onClick={() => navigate("/")}
            >
                OK
            </button>
        </div>
    );
};

export default BookingConfirmed;