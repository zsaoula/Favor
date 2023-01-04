import React, {useEffect} from 'react';
import {isEmpty} from "./Utils";
import {useSelector} from "react-redux";

const Notif = ({message} ) => {
    const usersData = useSelector((state) => state.users.users);

    return (
        <div className='conteneur_notif'>
            <div className={'contenue_notif'}>
                <img id="PhotoProfile" alt="" src="lien" />
            </div>
            <div className={'contenue_notif'} >
                <h6 id="NomProfile">
                    bastien
                </h6>
            </div>
            <div className={'contenue_notif'}>
                    {message}
            </div>
        </div>

    );
};

export default Notif;