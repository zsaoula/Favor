import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from '../../pages/Profil.js';
import Home from '../../pages/Home.js';
import Trends from '../../pages/Trends.js';
import Discover from '../../pages/Discover.js';

const index = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Profil/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/trends" element={<Trends/>} />
                    <Route path="/discover" element={<Discover/>} />
                    <Route path="*" element={<Profil/>} />
                </Routes>
            </BrowserRouter>
    );
};

export default index;