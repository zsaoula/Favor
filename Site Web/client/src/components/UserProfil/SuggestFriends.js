import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils';
import FollowHandler from './FollowHandler';

const SuggestFriends = () => {
    // const userData = useSelector((state) => state.user.user);
    // const usersData = useSelector((state) => state.users.users);
    // const [chargement,setChargement] = useState(true);
    // const [change, setChange] = useState(true);
    // const [friends, setFriends] = useState([]);



    // useEffect(() => {
    //     const stateFriend = () => {
    //         let array = [];
    //         usersData.map((user) => {
    //             if(user._id !== userData._id && user.followers.includes(userData._id)){
    //                 return array.push(user._id);
    //             }
    //         })
    //         //mettre dans un ordre aléatoire
    //         array.sort(() => 0.5 - Math.random());
    //         if(window.innerHeight > 780){
    //             array.length = 5;
    //         }
    //         if(window.innerHeight > 720){
    //             array.length = 4;
    //         }
    //         if(window.innerHeight > 660){
    //             array.length = 3;
    //         }
    //         if(window.innerHeight > 600){
    //             array.length = 2;
    //         }
    //         if(window.innerHeight > 540){
    //             array.length = 1;
    //         }else {
    //             array.length = 0;
    //         }
    //         setFriends(array);
    //     }

    //     if(change && !isEmpty(usersData[0]) && !isEmpty(userData._id)){
    //         stateFriend();
    //         setChargement(false);
    //         setChange(false);
    //     }
    // }, [userData, usersData, change])

    // return (
    //     <div>
    //         <p>Suggestions</p>
    //         {chargement ? (
    //            <i className='fas fa-spinner fa-pulse'></i> 
    //         ) : (
    //             <ul>
    //                 {friends && friends.map((user) => {
    //                     for(let i = 0; i < usersData.length; i++){
    //                         if(user === usersData[i]._id){
    //                             return (
    //                                 <li className='suggest-friend-card' key={user}>
    //                                     <img src={usersData[i].picture} alt="img"/>
    //                                     <p>{usersData[i].pseudo}</p>
    //                                     <FollowHandler idToFollow={usersData[i]._id} type={"card"}/>
    //                                 </li>
    //                             );
    //                         }
    //                     }
    //                 })}

    //             </ul>
    //         )}
    //     </div>
    //);
};

export default SuggestFriends;