import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import Log from '../components/Log'
import '../styles/pages/_profil.scss'

const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className="profil-page">
            {uid ? (
                <h1>UPDATE PAGE</h1>
            ) : (
                <div className="log-container">
                    <Log  signin={true} signup={false}/>
                </div>
            )}
        </div>
    );
};

export default Profil;