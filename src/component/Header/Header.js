import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="bg-customColor3 flex justify-between  ">
                <Link className="text-white text-base block font-semibold p-4 " to="/home">Home Page</Link>
                <Link className="text-white text-base block font-semibold p-4 " to="/about">About Us</Link>
                <Link className="text-white text-base block font-semibold p-4 " to="/services">Services</Link>
                <Link className="text-white text-base block font-semibold p-4 " to="/event">Event</Link>
                <Link className="text-white text-base block font-semibold p-4 " to="/register">Register</Link>
                <Link className="text-white text-base block font-semibold p-4 " to="/sign">Sign in</Link>
            </nav>
        </div>
    );
};

export default Header;