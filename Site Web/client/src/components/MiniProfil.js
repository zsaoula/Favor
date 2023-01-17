import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../actions/post.actions";
import {getUserTemp} from "../actions/user.actions";
import {useParams} from "react-router-dom";
import {isEmpty} from "./Utils";
import FollowHandler from "./UserProfil/FollowHandler";

const MiniProfil =  ({uid} ) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/user/${uid}`);
            const data = await response.json();
            setUserData(data);
        }
        fetchData();
    }, [uid]);

    if (!userData) {
        return <p>Loading...</p>;
    }



    return (
        <div className="ListReco">
            <div className="UtiReco">
                <img className="image" src={userData.picture}/>
                <a href={`/Profil/${uid}`}>{userData.pseudo}</a>
            </div>
        </div>
    );
};

export default MiniProfil;
