import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import Log from '../components/Log'
import Home from './Home';
import { NavLink } from 'react-router-dom';
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
        </div>
    );
};

export default HomeNavigation;