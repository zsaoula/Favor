import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <img src=''alt='Logo'/>
                </li>
                <NavLink to="/Decouvrir">
                    <li>
                        <span>Découvrir</span>
                    </li>
                </NavLink>
                <NavLink to="Home">
                    <li>
                        <span></span>
                    </li>   
                </NavLink>
                <NavLink to="/Tendances">
                    <li>
                        <span>Tendances</span>
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navbar; 