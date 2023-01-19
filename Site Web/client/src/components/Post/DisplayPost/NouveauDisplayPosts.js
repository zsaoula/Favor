import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/post.actions';
import { isEmpty } from "../../Utils";
import Post from '../PostNouvelleAffichage';
import { UidContext } from '../../AppContext';

const NouveauDisplayPosts = () => {
    const postsData = useSelector((state) => state.post.post);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch])

    if (!postsData) {
        return <p>Loading...</p>;
    }
    try{
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
    }
    catch (error){
        return <p>Loading...</p>;

    }
};

export default NouveauDisplayPosts;