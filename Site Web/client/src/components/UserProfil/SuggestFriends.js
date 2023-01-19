import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils';
import FollowHandler from './FollowHandler';
import MiniProfil from "../MiniProfil";

const SuggestFriends = () => {
    const userData = useSelector((state) => state.user.user);
    const usersData = useSelector((state) => state.users.users);
    const [chargement,setChargement] = useState(true);
    const [change, setChange] = useState(true);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const stateFriend = () => {
            let array = [];
            usersData.map((user) => {
                if(user._id !== userData._id && user.followers.includes(userData._id)){
                    return array.push(user._id);
                }
            })
            //mettre dans un ordre aléatoire
            array.sort(() => 0.5 - Math.random());
            if(window.innerHeight > 780){
                array.length = 5;
            }
            if(window.innerHeight > 720){
                array.length = 4;
            }
            if(window.innerHeight > 660){
                array.length = 3;
            }
            if(window.innerHeight > 600){
                array.length = 2;
            }
            if(window.innerHeight > 540){
                array.length = 1;
            }else {
                array.length = 0;
            }
            setFriends(array);
        }

        const stateTopFollowers = () => {
            let array = [];
            let obj = JSON.parse(JSON.stringify(usersData));
            obj.sort((a, b) => b.followers.length - a.followers.length);
            obj.map((user) => {
                if(user._id !== userData._id && !user.followers.includes(userData._id)){
                    return array.push(user._id);
                }
            })
            console.log(array);
            array = array.splice(0, 5);
            setFriends(array);
        }

        if(change && !isEmpty(usersData[0]) && userData!=null){
            if(userData.followers.length === 0){
                stateTopFollowers();
            }else{
                stateFriend();
            }
            setChargement(false);
            setChange(false);
        }
    }, [userData, usersData, change])

    return (
            <div className="recoDiv">
                <div className="reco">
                    <span>Vous pourriez suivre</span>
                    <hr/>
                    {chargement ? (
                        <i className='fas fa-spinner fa-pulse'></i> 
                    ) : (
                        <div className="ListReco" >
                            {friends && friends.map((user) => {
                                for(let i = 0; i < usersData.length; i++){
                                    if(user === usersData[i]._id){
                                        return (
                                            <div className="UtiReco" key={user}>
                                                <MiniProfil uid={usersData[i]._id}></MiniProfil>
                                                <FollowHandler idToFollow={usersData[i]._id} type={"card"}/>
                                            </div>
                                        );
                                    }
                                }
                            })}

                        </div>
                    )}
                </div>
            </div>
    );
};

export default SuggestFriends;