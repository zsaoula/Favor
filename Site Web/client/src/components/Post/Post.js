import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FollowHandler from '../UserProfil/FollowHandler';
import { dateParser, isEmpty } from '../Utils';
import ButtonLike from './ButtonLike';
import Comment from './Comment';
import Commentaire from '../../assets/img/commentaire.png';
import MiniProfil from "../MiniProfil";

const LinkPreview = ({ link }) => {
    const [preview, setPreview] = useState({ image: '', title: '', description: '' });

    useEffect(() => {
        //const key = '9f24d981b6f0ddfce993ce4a20d58867';
        const key = '2865b6b9d9571dc00bf940fad5728248';

        const fullLink = `http://api.linkpreview.net/?key=${key}&q=${link}`;

        axios
            .get(fullLink)
            .then((res) => setPreview(res.data))
            .catch((err) => console.error(err));
    }, [link]);

    if(preview.image === "") {
        return (<div className='alignementLien'><a className="LienPostHome" href={link}>{link}</a></div>);
    }
    else {
        return (
            <>
            <div className='alignementLien'>
                <a href={link}>
                    <img id="imageLien" className="LienPostHome" src={preview.image} alt={preview.title}/>
                </a>
                
            </div>
            </>
        );
    }
};

//e.preventDefaul(); pour ne pas recharcher la page
const Post = ( { post } ) => {
    const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.users.users);
    const userData = useSelector((state) => state.user.user);
    const [comments, setComments] = useState(false);


    useEffect(() => {
        !isEmpty(usersData[0]) && !isEmpty(userData) && setIsLoading(false)
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
                            <MiniProfil uid={post.postedId}/>
                            {post.postedId !== userData._id && (<FollowHandler idToFollow={post.postedId} type={'suggest'}/>)}
                        </div>
                        <div>{dateParser(post.createdAt)}</div>
                    </div>


                    <div id="contenuePoste">
                        <LinkPreview link={post.lien}/>
                        <p>{post.message}</p>
                    </div>
                    <div id="basPoste">
                        <div id="like">
                            <ButtonLike post={post}/>
                        </div>
                        <div id="commentaire">
                            <img src={Commentaire} onClick={() => setComments(!comments)}/>
                            <div>{post.comments.length}</div>
                        </div>
                    </div>
                    {comments && <Comment post={post} />}
                </div>
            </div>) }
        </li>
    );
};



//ce qui écrit dans le input est récuperé par le state
export default Post;