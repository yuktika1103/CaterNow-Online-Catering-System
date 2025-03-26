import React, { useState } from 'react';
import './Style/Signup.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact_no: '',
        address: ''
    });

    const [error, setError] = useState({ email: '', contact: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
        if (!emailPattern.test(formData.email)) {
            setError((prev) => ({ ...prev, email: "Only Gmail and Hotmail emails are allowed!" }));
        } else {
            setError((prev) => ({ ...prev, email: '' }));
        }

        const phonePattern = /^[6-9]\d{9}$/;
        if (!phonePattern.test(formData.contact_no)) {
            setError((prev) => ({ ...prev, contact: "Invalid contact number!" }));
        } else {
            setError((prev) => ({ ...prev, contact: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password fields do not match!");
            return;
        }

        if (error.email || error.contact) {
            alert("Please fix validation errors before submitting.");
            return;
        }

        const payload = {
            ...formData,
            role: "user"
        };

        try {
            const response = await axios.post("http://localhost:8080/addusers", payload);
            alert(response.data.message);
            navigate("/login");
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                contact_no: '',
                address: ''
            });
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed!");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signup-form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {error.email && <p className="error">{error.email}</p>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact No (+91)</label>
                        <input
                            type="text"
                            name="contact_no"
                            value={formData.contact_no}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {error.contact && <p className="error">{error.contact}</p>}
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p className="signup-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
