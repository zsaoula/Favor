import React from 'react';
import Navbar from '../components/Navbar';
import Notif from '../components/Notif';

const Trends = () => {
    return (
        <div id={'listeNotif'}>
            <Navbar />
            <h1>Notification</h1>
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a commenter votre poste"/>
        </div>);
};

export default Trends;