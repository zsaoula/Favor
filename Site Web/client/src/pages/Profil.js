import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { dateParser } from '../components/Utils';
import FollowHandler from '../components/UserProfil/FollowHandler';

const Profil = () => {
    const userData =  useSelector((state) => state.user.user);
    const usersData =  useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const [followingPopup, setFollowingPopup] = useState(false);
    const [followerPopup, setFollowerPopup] = useState(false);

    return (
        <>
            <Navbar />
            <main>
            <div id="bandeauProfil">
                <h1 className='affichage-date'>Compte créé le : {dateParser(userData.createdAt)}</h1>
                <div id="image">
                    <img id="PhotoProfile" alt="Profil" src={userData.picture}/>
                </div>
                <div id="blocName">
                    <h1>{userData.pseudo}</h1>
                    <h2 className="subdo">@{userData.pseudo}</h2>
                    <div>
                        <div id="blocAbonnement">
                            <div onClick={() => setFollowingPopup(true)} className="bloc-aboonnements-abonner">
                                <div className="nombre">{userData.following.length}</div>
                                <div className="texteNombre">Abonnement</div>
                            </div>
                            <div onClick={() => setFollowerPopup(true)} className="bloc-aboonnements-abonner">
                                <div className="nombre">{userData.followers.length}</div>
                                <div className="texteNombre">Abonnée</div>
                            </div>
                            {followingPopup && (
                                <div className="popup-profil-container">
                                <div className="modal">
                                    <h3>Abonnements</h3>
                                    <span className="cross" onClick={() => setFollowingPopup(false)}>
                                    &#10005;
                                    </span>
                                    <ul>
                                    {usersData.map((user) => {
                                        for (let i = 0; i < userData.following.length; i++) {
                                        if (user._id === userData.following[i]) {
                                            return (
                                            <li key={user._id}>
                                                <img src={user.picture} alt="user-pic" />
                                                <h4>{user.pseudo}</h4>
                                                <div className="follow-handler">
                                                <FollowHandler idToFollow={user._id} type={'card'}/>
                                                </div>
                                            </li>
                                            );
                                        } 
                                        }
                                        return null;
                                    })}
                                    </ul>
                                </div>
                                </div>
                            )}
                            {followerPopup && (
                                <div className="popup-profil-container">
                                <div className="modal">
                                    <h3>Abonnés</h3>
                                    <span className="cross" onClick={() => setFollowerPopup(false)}>
                                    &#10005;
                                    </span>
                                    <ul>
                                    {usersData.map((user) => {
                                        for (let i = 0; i < userData.followers.length; i++) {
                                        if (user._id === userData.followers[i]) {
                                            return (
                                            <li key={user._id}>
                                                <img src={user.picture} alt="user-pic" />
                                                <h4>{user.pseudo}</h4>
                                                <div className="follow-handler">
                                                <FollowHandler idToFollow={user._id} type={'card'} />
                                                </div>
                                            </li>
                                            );
                                        }
                                        }
                                        return null;
                                    })}
                                    </ul>
                                </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
            </main>
        </>
    )
};

export default Profil;