import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav className="bg-customColor3 flex justify-between  ">
                <NavLink activeStyle={{fontWeight:"bold",color:"red"}} className="text-white text-2xl block font-semibold p-4 " to="/home">Home Page</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"red"}} className="text-white text-2xl block font-semibold p-4 " to="/about">About Us</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"red"}} className="text-white text-2xl block font-semibold p-4 " to="/services">Services</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"red"}} className="text-white text-2xl block font-semibold p-4 " to="/event">Event</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"red"}} className="text-white text-2xl block font-semibold p-4 " to="/register">Register</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"red"}} className="text-white text-2xl block font-semibold p-4 " to="/sign">Sign in</NavLink>
            </nav>
        </div>
    );
};

export default Header;