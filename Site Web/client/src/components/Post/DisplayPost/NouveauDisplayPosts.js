import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/post.actions';
import { isEmpty } from "../../Utils";
import Post from '../PostNouvelleAffichage';
import { UidContext } from '../../AppContext';

const NouveauDisplayPosts = ({uid}) => {
    const postsData = useSelector((state) => state.post.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch])
    console.log("datapost");
    console.log(postsData);
    if (!postsData) {
        return <p>Loading...</p>;
    }
    try{
        return (
            <div>
                <ul>
                    {!isEmpty(postsData) &&
                        postsData.map((post) => {
                            if(post.postedId === uid){
                                console.log("test uid post");
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