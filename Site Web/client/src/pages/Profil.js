import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Profil = () => {
    const userData =  useSelector((state) => state.pictures.pictures);
    return (
        <>
            <Navbar />
            <div id="bandeauProfil">
                <div id="image">
                    <img id="PhotoProfile" alt="Profil" src={userData.picture}/>
                </div>
                <div id="blocName">
                    <h1>{userData.pseudo}</h1>
                    <h2 className="subdo">@{userData.pseudo}</h2>
                    <div>
                        <div id="blocAbonnement">
                            <div>
                                <div className="nombre">10k</div>
                                <div className="texteNombre">Abonnement</div>
                            </div>
                            <div>
                                <div className="nombre">10k</div>
                                <div className="texteNombre">Abonnée</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profil;