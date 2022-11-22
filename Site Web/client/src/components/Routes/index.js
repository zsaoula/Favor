import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNavigation from '../../pages/HomeNavigation.js';
import Home from '../../pages/Home.js';
import Trends from '../../pages/Trends.js';
import Discover from '../../pages/Discover.js';
import Profil from '../../pages/Profil.js';

const index = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeNavigation/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/trends" element={<Trends/>} />
                    <Route path="/discover" element={<Discover/>} />
                    <Route path="*" element={<HomeNavigation/>} />
                    <Route path="/profil" element={<Profil />} />
                </Routes>
            </BrowserRouter>
    );
};

export default index;