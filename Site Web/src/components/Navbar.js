import React from "react";
import { NavLink } from "react-router-dom";
import PP  from "../assets/img/unknown.png";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className="partie-gauche-nav">
                    <li className="logo">
                        <img src=''alt='Logo'/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/Decouvrir" className={((nav) => (nav.isActive ? "nav-active b nav-active-tendances-decouvrir" : "b"))}>
                            <span>Découvrir</span>
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to="/Home" className={((nav) => (nav.isActive ? "nav-active b  nav-active-menu" : "b"))}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-home">
                                <path stroke="black" fill='black' d="M256 73.825a182.18 182.18 0 0 0-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 1 0 0-364.35zm76.636 161.579h-12.037v91.503a18.908 18.908 0 0 1-18.896 18.904h-26.78v-53.56a6.299 6.299 0 0 0-6.297-6.294H232.4a6.3 6.3 0 0 0-6.302 6.294v53.56h-26.771a18.91 18.91 0 0 1-18.906-18.904v-91.503h-11.97a7.879 7.879 0 0 1-5.071-13.905l82.055-69.039a7.89 7.89 0 0 1 10.142 0l81.479 68.547a7.88 7.88 0 0 1-4.421 14.396z" data-name="Home"/>
                            </svg>
                        </NavLink>  
                    </li>
                
                
                    <li>
                        <NavLink to="/Tendances" className={((nav) => (nav.isActive ? "nav-active b nav-active-tendances-decouvrir" : "b"))}>
                            <span>Tendances</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className="partie-droit-nav">
                    <li >
                        <NavLink to="/Tendances" className='b'>
                            <span>pseudo</span>
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to="/Tendances" className='b'>
                            <img src={PP} alt='Logo' className="img-profile"/>
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to="/Tendances" className='b'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="svg-param" viewBox="0 0 256 256">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.09957,88.09957,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12.01375,12.01375,0,0,1,140,128Zm48,0a12,12,0,1,1-12-12A12.01375,12.01375,0,0,1,188,128Zm-96,0a12,12,0,1,1-12-12A12.01375,12.01375,0,0,1,92,128Z"/>
                            </svg>
                        </NavLink>
                    </li>
                
                </ul>
            </nav>
        </header>
    );
}

export default Navbar; 