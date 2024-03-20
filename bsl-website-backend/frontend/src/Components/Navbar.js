// Navbar.js
import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons library

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/" className="navbar-link"><FaHome /> Home</a></li>
                <li className="navbar-item"><a href="/about" className="navbar-link"><FaInfoCircle /> About</a></li>
                <li className="navbar-item"><a href="/contact" className="navbar-link"><FaEnvelope /> Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
