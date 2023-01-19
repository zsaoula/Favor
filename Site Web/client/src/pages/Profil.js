import React, {useContext, useEffect, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import {dateParser, isEmpty} from '../components/Utils';
import FollowHandler from '../components/UserProfil/FollowHandler';
import PostPersonnels from '../components/UserProfil/NavigationProfil/PostsPersonnels';
import DossierPersonnels from '../components/UserProfil/NavigationProfil/DossiersPersonnels';
import PostsLikes from '../components/UserProfil/NavigationProfil/PostsLikes';
import MiniProfil from "../components/MiniProfil";
import SuggestFriends from "../components/UserProfil/SuggestFriends";
import {UidContext} from "../components/AppContext";

const Profil = () => {
    const { uid } = useParams();
    const [userData, setUserData] = useState(null);
    const [followingPopup, setFollowingPopup] = useState(false);
    const [uidS, setUidS] = useState(false);
    const [followerPopup, setFollowerPopup] = useState(false);
    const [dossierPersonnels,setdossierPersonnels ] = useState(false);
    const [postPersonnels,setpostPersonnels ] = useState(true);
    const [postLikes,setpostLikes ] = useState(false);
    const uidU= useContext(UidContext);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}api/user/${uid}`);
            const data = await response.json();
            setUserData(data);
        }
        fetchData();
        if(uidU === uid){
            setUidS(true);
        }
    }, [uid]);
    

    const handleModals = (e) => {
        if (e.target.id === "DossierPersonnels") {
            setdossierPersonnels(true);
            setpostPersonnels(false);
            setpostLikes(false);
        } else if (e.target.id === "PostsPersonnels") {
            setdossierPersonnels(false);
            setpostPersonnels(true);
            setpostLikes(false);
        } else if (e.target.id ==="PostsLikes"){
            setdossierPersonnels(false);
            setpostPersonnels(false);
            setpostLikes(true);
        }
    };

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
    <div>
       <Navbar />
            {/* <main>
            <div id="bandeauProfil">
                <h1 classNameName='affichage-date'>Compte créé le : {dateParser(userData.createdAt)}</h1>
                <div id="image">
                    <img id="PhotoProfile" alt="Profil" src={userData.picture}/>
                </div>
                <div id="blocName">
                    <h1>{userData.pseudo}</h1>
                    <h2 classNameName="subdo">@{userData.pseudo}</h2>
                    <div>
                        <div id="blocAbonnement">
                            <div onClick={() => setFollowingPopup(true)} classNameName="bloc-aboonnements-abonner">
                                <div classNameName="nombre">{userData.following.length}</div>
                                <div classNameName="texteNombre">Abonnement</div>
                            </div>
                            <div onClick={() => setFollowerPopup(true)} classNameName="bloc-aboonnements-abonner">
                                <div classNameName="nombre">{userData.followers.length}</div>
                                <div classNameName="texteNombre">Abonnée</div>
                            </div>
                            {followingPopup && (
                                <div classNameName="popup-profil-container">
                                <div classNameName="modal">
                                    <h3>Abonnements</h3>
                                    <span classNameName="cross" onClick={() => setFollowingPopup(false)}>
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
                                                <div classNameName="follow-handler">
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
                                <div classNameName="popup-profil-container">
                                <div classNameName="modal">
                                    <h3>Abonnés</h3>
                                    <span classNameName="cross" onClick={() => setFollowerPopup(false)}>
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
                                                <div classNameName="follow-handler">
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
            </main> */}

    <main>
        <div>
            <div>
                <div className="imageProfil">
                    <img className="image" src={userData.picture.data}/>
                </div>
                <div className="divPseudo">
                    <h3 className="pseudo">{userData.pseudo}</h3>
                    {/* <h3>suuu</h3> */}
                </div>
                <div className="divSuivreFollowing">
                    { uidS && <a href="#" className="button" id="button">Suivre +</a>}
                </div>
                <div className="divSuivreFollowing">
                 <div className="nbFollow" onClick={() => setFollowingPopup(true)}>
                  <h4>{userData.following.length}</h4>
                  <h4 className="txtFollower">Abonnements</h4>
                 </div>
                 <div className="nbFollow" onClick={() => setFollowerPopup(true)}>
                    <h4>{userData.followers.length}</h4>
                    <h4 className="txtFollower">Abonnés</h4>
                  </div> 
                </div>
                  {followingPopup && (
                      <div className="popup-profil-container">
                          <div className="modal">
                              <h3>Abonnements</h3>
                              <span className="cross" onClick={() => setFollowingPopup(false)}>
                                  &#10005;
                              </span>
                              <ul>
                                  {
                                      userData.following.map((follower, i) => {
                                          return (
                                              <li className="infoFollow" key={i}>
                                                  <MiniProfil uid={follower}/>
                                                  <div classNameName="follow-handler">
                                                      <FollowHandler idToFollow={uid} type={'card'}/>
                                                  </div>
                                              </li>
                                          )
                                      })
                                  }
                              </ul>
                          </div>
                      </div>
                  )}
                {followerPopup && (
                    <div className="popup-profil-container">
                        <div className="modal">
                            <h3>Abonnements</h3>
                            <span className="cross" onClick={() => setFollowerPopup(false)}>
                                  &#10005;
                              </span>
                            <ul>
                                {
                                    userData.followers.map((follower, i) => {
                                        return (
                                            <li className="infoFollow" key={i}>
                                                <MiniProfil uid={follower}/>
                                                <div classNameName="follow-handler">
                                                    <FollowHandler idToFollow={uid} type={'card'}/>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                )}
            </div>


        <div className="basDePage">
            <div className="divMenu">
                <div>
                    <nav role="navigation" className="navProfil">
                        <ul className="navItemsProfil">
                            <li className="navItemProfil">
                                <a className="navLinkProfil" id='DossierPersonnels' onClick={handleModals}>Dossier Personnel</a>
                            </li> 
                            <li className="navItemProfil">
                                <a className="navLinkProfil" id='PostsPersonnels' onClick={handleModals}>Posts</a>
                            </li>
                            <li className="navItemProfil">
                                <a  className="navLinkProfil" id='PostsLikes' onClick={handleModals}>Posts likés</a>
                            </li>
                        </ul>
                     </nav>
              </div>
              <div className="menuContent">
                <div className="listContent">
                    {dossierPersonnels &&<DossierPersonnels/>}
                    {postPersonnels &&<PostPersonnels/>}
                    {postLikes &&<PostsLikes/>}
                </div>
              </div>
          </div>
          <div>
              {uid && <SuggestFriends />}
          </div>
        </div>
      </div>
     </main>
    </div>
    )
};

export default Profil;