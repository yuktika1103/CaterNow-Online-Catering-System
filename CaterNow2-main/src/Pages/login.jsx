import React, { useState } from "react";
import "./Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/checklogin",
                formData,
                { withCredentials: true }
            );

            console.log("Login Success:", response.data);
            alert(response.data.message);

            // Save user info to context
            login(response.data.user);

            // Navigate to home or other route based on backend response
            navigate("/");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message || "Login failed!");
            } else {
                alert("Network error or backend server is down");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
