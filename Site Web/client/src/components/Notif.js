import React from 'react';
import {isEmpty} from "./Utils";

const Notif = ({notification} ) => {
    const messageNotif = (typeNotif) =>{
        if(typeNotif == 'like') {
            return "a like";
        }
        return 'a commenter'
    }
    return (
        <div className='conteneur_notif'>
            <div className={'contenue_notif'}>
                <img id="PhotoProfile" alt="" src="lien" />
            </div>
            <div className={'contenue_notif'} >
                <h6 id="NomProfile">
                    {notification.typeNotif}
                </h6>
            </div>
            <div className={'contenue_notif'}>
                {
                    messageNotif(notification.typeNotif)
                }
            </div>
        </div>

    );
};

export default Notif;
