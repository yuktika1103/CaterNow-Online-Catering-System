import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <div className="logo"><a href="/">CaterNow</a></div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/#testimonials">Testimonials</a></li>
                    <li><a href="/#contact">Contact</a></li>
                    {user ? (
                        <>
                            <li><span className="user-greeting">Hi👋!, {user.name}</span></li>
                            <li><button className="logout-button" onClick={logout}>Logout</button></li>
                        </>
                    ) : (
                        <li><button className="cta-button" onClick={() => navigate("/login")}>Login/Register</button></li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
