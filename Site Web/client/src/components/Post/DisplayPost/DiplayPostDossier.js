import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/post.actions';
import { isEmpty } from "../../Utils";
import Post from '../PostNouvelleAffichage';
import { UidContext } from '../../AppContext';

const DiplayPostDossier = () => {
    const postsData = useSelector((state) => state.post.post);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch])


    return (
        <div>
            <ul>
                {!isEmpty(postsData[0]) &&
                    postsData.map((post) => {
                        if(post.postedId === uid){
                        return <Post post={post} key={post._id}/>
                        }
                   })}
            </ul>
        </div>
    );
};

export default DiplayPostDossier;