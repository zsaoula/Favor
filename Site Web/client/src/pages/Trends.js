import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Notif from '../components/Notif';
import {useSelector} from "react-redux";


const Trends = () => {
    const [setLoadNotif] = useState(true);
    const userData =  useSelector((state) => state.user.user);

    return (
        <div id={'listeNotif'}>
            <Navbar />
            <h1>Notification</h1>
            {
                userData.notif != null && userData.notif.map((notif) => {
                    return (
                        <li>
                            <Notif key={notif._id} notification={notif}/>
                        </li>
                    );
                })

            }
        </div>
    );
};

export default Trends;