import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNavigation from '../../pages/HomeNavigation.js';
import Home from '../../pages/Home.js';
import Trends from '../../pages/Trends.js';
import Discover from '../../pages/Discover.js';
import Profil from '../../pages/Profil.js';
import Configuration from '../../pages/Configuration.js';
import SearchBar from '../../pages/SearchBar.js';
import ResetPassword from '../../pages/ResetPassword.js';

const index = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeNavigation/>} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Trends" element={<Trends/>} />
                    <Route path="/Discover" element={<Discover/>} />
                    <Route path="/SearchBar" element={<SearchBar/>} />
                    {/* <Route path="*" element={<HomeNavigation/>} /> */}
                    <Route path="/Profil/:uid" element={<Profil/>} />
                    <Route path="/Configuration" element={<Configuration/>}/>
                    <Route path="/reset/:token" element={<ResetPassword />}/>
                </Routes>
            </BrowserRouter>
    );
};

export default index;