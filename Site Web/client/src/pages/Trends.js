import React from 'react';
import Navbar from '../components/Navbar';
import Notif from '../components/Notif';

const Trends = () => {
    return (
        <>
            <Navbar />
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a like"/>
            <Notif message="a commenter votre poste"/>
        </>
    );
};

export default Trends;