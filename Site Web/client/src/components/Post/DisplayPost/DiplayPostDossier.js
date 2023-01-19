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
    console.log("datados");
    console.log(postsData);

    return (
        <div>
            <ul>
                {!isEmpty(postsData) &&
                    postsData.map((post) => {
                        if(post.postedId === uid){
                            console.log(post)
                            console.log("tttt")
                        return <Post post={post} key={post._id}/>
                        }
                   })}
            </ul>
        </div>
    );
};

export default DiplayPostDossier;