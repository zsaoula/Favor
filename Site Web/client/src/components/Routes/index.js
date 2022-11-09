import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from '../../pages/Profil.js' 

const index = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Profil/>} />
                </Routes>
            </BrowserRouter>
    );
};

export default index;