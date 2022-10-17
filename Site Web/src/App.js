//import logo from './logo.svg';
import './styles/App.scss';
import React from 'react';
import 'tachyons';
import Connexion from './pages/Connexion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Tendances from './pages/Tendances';
import Decouvrir from './pages/Decouvrir';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/tendances" element={<Tendances/>} />
        <Route path="/decouvrir" element={<Decouvrir/>} />
        <Route path="*" element={<Connexion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
