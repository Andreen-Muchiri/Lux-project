import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return <nav className = "nav">
        < a href = "/" className="site-title">Lux-Hotels</a>
        <ul>
            <li className="active">
                <a href = "/">Home</a>
                </li>
                <li>
                <a href = "/about">About</a>
                </li>
                <li>
                <a href = "/room">Room</a>
                </li>

                <li>
                <a href = "/contact">Contact Us</a>
            </li>
            <li>
                <a href = "/login"> Login</a>
            </li>
        </ul>
        {/* <button>
        <NavLink to="/login">Login</NavLink></button>    */}
    </nav>
}