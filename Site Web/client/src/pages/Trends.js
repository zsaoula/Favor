import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Notif from '../components/Notif';
import {useSelector} from "react-redux";


const Trends = () => {
    const [setLoadNotif] = useState(true);
    const userData =  useSelector((state) => state.user.user);

    try {
        return (
            <div id={'listeNotif'}>
                <Navbar/>
                <h1>Notification</h1>
                {
                    userData.notif != null && userData.notif.map((notif) => {
                        return (
                            <Notif key={notif._id} notification={notif}/>
                        );
                    })

                }
            </div>
        );
    }
    catch (error){
        return <div>Loading...</div>
    }
};

export default Trends;