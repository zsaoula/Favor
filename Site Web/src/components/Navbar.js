import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/_navbar.scss"

const Navbar = () => {
    return (
            <nav>
                <ul>
                    <li className="logo">
                        <img src=''alt='Logo'/>
                    </li>
                    <NavLink to="/Decouvrir" className='b'>
                        <li>
                            <span>Découvrir</span>
                        </li>
                    </NavLink>
                    <NavLink to="/Home" className='b'>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="home">
                                <path stroke="black" fill='black' d="M256 73.825a182.18 182.18 0 0 0-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 1 0 0-364.35zm76.636 161.579h-12.037v91.503a18.908 18.908 0 0 1-18.896 18.904h-26.78v-53.56a6.299 6.299 0 0 0-6.297-6.294H232.4a6.3 6.3 0 0 0-6.302 6.294v53.56h-26.771a18.91 18.91 0 0 1-18.906-18.904v-91.503h-11.97a7.879 7.879 0 0 1-5.071-13.905l82.055-69.039a7.89 7.89 0 0 1 10.142 0l81.479 68.547a7.88 7.88 0 0 1-4.421 14.396z" data-name="Home"/>
                            </svg>
                        </li>   
                    </NavLink>
                    <NavLink to="/Tendances" className='b'>
                        <li>
                            <span>Tendances</span>
                        </li>
                    </NavLink>
                    <NavLink to="/Tendances" className='b'>
                        <li>
                            <span>pseudo</span>
                        </li>
                    </NavLink>
                    <NavLink to="/Tendances" className='b'>
                        <li>
                            <span>test</span>
                        </li>
                    </NavLink>
                    <NavLink to="/Tendances" className='b'>
                        <li>
                        </li>
                    </NavLink>
                </ul>
            </nav>
    );
}

export default Navbar; 