import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { dateParser } from '../components/Utils';
import FollowHandler from '../components/UserProfil/FollowHandler';
import LesPostPersonnels from '../components/UserProfil/NavigationProfil/PostsPersonnels';
import LesDossierPersonnels from '../components/UserProfil/NavigationProfil/DossiersPersonnels';
import LesPostsLikes from '../components/UserProfil/NavigationProfil/PostsLikes';

const Profil = () => {
    const userData =  useSelector((state) => state.user.user);
    const usersData =  useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const [followingPopup, setFollowingPopup] = useState(false);
    const [followerPopup, setFollowerPopup] = useState(false);


    const [dossierPersonnel,setdossierPersonnels ] = useState(true);
    const [postPersonnel,setpostPersonnels ] = useState(false);
    const [postLike,setpostLikes ] =useState(false);

    const handleModalsProfil = (e) => {
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



    return (
        <>
            <Navbar />
            {/* <main>
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
            </main> */}

            <main>
            <div>
            <div>
                <div class="imageProfil">
                    <img class="image" src={userData.picture}/>
                </div>
                <div class="divPseudo">
                    <h3 class="pseudo">{userData.pseudo}</h3>
                    {/* <h3>suuu</h3> */}
                </div>
                <div class="divSuivreFollowing">
                    <a href="#" class="button" id="button">Suivre +</a>
                </div>
                <div class="divSuivreFollowing">
                 <div class="nbFollow" onClick={() => setFollowingPopup(true)}>
                  <h4>{userData.following.length}</h4>
                  <h4 class="txtFollower">Abonnements</h4>
                 </div>
                 <div class="nbFollow" onClick={() => setFollowerPopup(true)}>
                    <h4>{userData.followers.length}</h4>
                    <h4 class="txtFollower">Abonnés</h4>
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
        
            
            <div class="basDePage">
              <div class="divMenu">
                <div>
                    <nav role="navigation" class="navProfil">
                        <ul class="navItemsProfil">
                            <li class="navItemProfil">
                                <a class="navLinkProfil" onClick={handleModalsProfil} id="DossierPersonnels" >Dossier Personnel</a>
                            </li> 
                            <li class="navItemProfil">
                                <a class="navLinkProfil"  onClick={handleModalsProfil} id="PostsPersonnels">Posts</a>
                            </li>
                            <li class="navItemProfil">
                                <a  class="navLinkProfil" onClick={handleModalsProfil} id="PostsLikes" >Posts likés</a>
                            </li> 
                          
                        </ul>
                     </nav>
              </div>
            <div class="menuContent listContent">

                {dossierPersonnel &&<LesDossierPersonnels/>}
                {postPersonnel &&<LesPostPersonnels/>}
                {postLike &&<LesPostsLikes/>}

                  
              </div>
          </div>
          <div class="recoDiv">
            <div class="reco">
              <span>Vous pourriez suivre</span>
              <hr/>
              <div class="ListReco">
                <div class="UtiReco">
                <img class="image" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                <span>UtiT</span>
                <a href="#" class="buttonReco" id="button">Suivre</a>
              </div>
              <div class="UtiReco">
                <img class="image" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                <span>UtiT</span>
                <a href="#" class="buttonReco" id="button">Suivre</a>
              </div>
              <div class="UtiReco">
                <img class="image" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                <span>UtiT</span>
                <a href="#" class="buttonReco" id="button">Suivre</a>
              </div>
              </div>
              
            </div>
              
          </div>
          
         
        </div>
        </div>
            </main>
        </>
    )
};

export default Profil;