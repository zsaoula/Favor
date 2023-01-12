import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Notif from '../components/Notif';
import {useDispatch, useSelector} from "react-redux";
import {getNotif, getUser} from '../actions/user.actions';
import {isEmpty} from "../components/Utils";
import axios from "axios";
import FollowHandler from "../components/UserProfil/FollowHandler";
import Post from "../components/Post/Post";


const Trends = () => {
    console.log('test');
    const [loadNotif, setLoadNotif] = useState(true);
    const [count , setCount] = useState(5);
    const dispatch = useDispatch();

    const userData =  useSelector((state) => state.user.user);
    const usersData =  useSelector((state) => state.users.users);

    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight){
            setLoadNotif(true);
        }
    }

    console.log("userData",userData,userData.notif, userData.notif.length);

    return (
        <div id={'listeNotif'}>
            <Navbar />
            <h1>Notification</h1>
            { /*userData.notif.length ? userData.notif.filter(notif => notif._id === userData.notif._id).map((notif) => <Notif message="dfdf"/>)
                : <h3>Aucune Notification</h3>*/

                userData.notif != null && userData.notif.map((notif) => {
                    return <Notif notification={notif}/>
                })

            }
        </div>
    );


    /*
        return (
            <div id={'listeNotif'}>
                <Navbar />
                <h1>Notification</h1>
                {
                    return(<h3>Aucune Notification</h3>);
                    userData.notif.map((notif) => {
                    for (let i = 0; i < userData.notif.length; i++) {
                        if (notif._id === userData.notif[i]) {
                            return (
                                <Notif message="dfdf"/>

                            );
                        }
                    }
                    return <h3>Aucune Notification</h3>;
                    })
                }
            </div>
        );*/

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