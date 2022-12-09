import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import Log from '../components/Log'
import Home from './Home';

import { NavLink } from 'react-router-dom';
import NewPoste from "../components/NewPoste";
import AjoutLien from "../components/AjoutLien";
//<Link to="/discover"/>

const HomeNavigation = () => {
    const uid = useContext(UidContext);

    return (
        <div className="profil-page">
            {uid ? (
                < Home />
            ) : (
                <div className="log-container">
                    <Log  signin={true} signup={false}/>
                </div>
            )}
            <AjoutLien></AjoutLien>
            <NewPoste></NewPoste>
        </div>
    );
};

export default HomeNavigation;