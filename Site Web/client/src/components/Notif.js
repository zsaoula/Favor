import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../actions/post.actions";
import {getUserTemp} from "../actions/user.actions";
import MiniProfil from "./MiniProfil";

const Notif =  ({notification} ) => {
    console.log('notification',notification)


    const MessageNotif =  (notification) =>{
        if(notification.typeNotif == 'like') {
            return "a like votre post";
        }
        else if(notification.typeNotif == 'commente') {
            return "a commenter votre post";
        }
        return 'vous follow'
    }

    return (
        <div className='conteneur_notif' key={notification._id}>
            <MiniProfil uid={notification.id_user}></MiniProfil>
            <div className={'contenue_notif'}>
                { MessageNotif(notification) }
            </div>
        </div>
    );
};

export default Notif;
