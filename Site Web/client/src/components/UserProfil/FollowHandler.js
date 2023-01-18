import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../actions/user.actions';
import { setUserToFollowData, setUserToUnFollowData } from '../../reducers/user.reducer';
import { isEmpty } from '../Utils';

const FollowHandler = ( { idToFollow , type } ) => {
    const userData = useSelector((state) => state.user.user);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();

    const handleFollow = (e) => {
        
        axios.patch(`${process.env.REACT_APP_API_URL}api/user/follow/` + userData._id, {idToFollow: idToFollow})
        .then((res) => {
            //dispatch(setUserToFollowData({payload: {idToFollow}}));
        })
        .catch((err) => console.log(err));
        setIsFollowed(true);
        e.preventDefault();
    };

    const handleUnFollow = (e) => {
        
        axios.patch(`${process.env.REACT_APP_API_URL}api/user/unfollow/` + userData._id, {idToUnFollow: idToFollow})
        .then((res) => {
           // dispatch(setUserToUnFollowData({payload: {idToFollow}}));
        })
        .catch((err) => console.log(err));
        setIsFollowed(false);
        e.preventDefault();
    };


    // const handleFollow = () => {
    //     dispatch(followUser(userData._id, idToFollow))
    //     setIsFollowed(true);    
    // }

    // const handleUnFollow = () => {
    //     dispatch(unFollowUser(userData._id, idToFollow))
    //     setIsFollowed(false);
    // }

    useEffect(() => {
        if(!isEmpty(userData.following)) {
            if(userData.following.includes(idToFollow)) {
                setIsFollowed(true);
            } else setIsFollowed(false);
        }

    }, [userData,idToFollow])

    return (
        <>
            {isFollowed && !isEmpty(userData) && (
                <span onClick={handleUnFollow}>
                    {type === "card" && <button className="unfollow-btn">Abonné</button>}
                    {type === "suggest" && <i className="fas fa-check-circle navbar-icon"></i>}
                </span>
            )}
            {isFollowed === false && !isEmpty(userData) && (
                <span onClick={handleFollow}>
                    {type === "card" && <button className="follow-btn">Suivre</button>}
                    {type === "suggest" && <i className="far fa-check-circle navbar-icon"></i>}
                </span>
            )}
        </>
    );
};

export default FollowHandler;