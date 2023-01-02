import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FollowHandler from '../UserProfil/FollowHandler';
import { dateParser, isEmpty } from '../Utils';
import ButtonLike from './ButtonLike';


//e.preventDefaul(); pour ne pas recharcher la page
const Post = ( { post } ) => {
    const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.users.users);
    const userData = useSelector((state) => state.user.user);

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    })

    return (
        <li className='conteneur_postes' key={post._id}>
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
            ):(
            <div id="cadrePoste">
                <div id="postContenu">
                    <div id="hautPoste">
                        <div id="cadreInfoPoste">
                            <img id="PhotoProfile" alt="" src={
                                !isEmpty(usersData[0]) &&
                                usersData.map((user) => {
                                    if (user._id === post.postedId) return user.picture;
                                    else return null;
                                }).join('')
                            }/>
                            <h6 id="NomProfile">
                                {
                                    !isEmpty(usersData[0]) &&
                                    usersData.map((user) => {
                                        if(user._id === post.postedId) return user.pseudo;
                                        else return null;
                                    }).join('')
                                }
                            </h6>
                            {/* {post.postedId !== userData._id && 
                            (<FollowHandler idToFollow={post.postedId} type={'suggest'}/>)} */}
                        </div>
                        <div>{dateParser(post.createdAt)}</div>
                    </div>

                    <div id="contenuePoste">
                        /*utliser leakpreview*/
                    </div>

                    <div id="contenuePoste">
                        <p>{post.message}</p>
                    </div>

                    <div id="basPoste">
                        <div id="like">
                            <ButtonLike post={post}/>
                            {/* <img src="coeurs.png"/> */}
                            <div>{post.likers.length}</div>
                        </div>
                        <div id="commentaire">
                            <img src="commentaire.png"/>
                            <div>{post.comments.length}</div>
                        </div>
                    </div>
                </div>
            </div>) }
        </li>
    );
};

//ce qui écrit dans le input est récuperé par le state
export default Post;