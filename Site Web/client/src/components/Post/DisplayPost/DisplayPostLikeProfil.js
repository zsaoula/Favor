import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../actions/post.actions';
import { isEmpty } from "../../Utils";
import Post from '../PostNouvelleAffichage';
import { UidContext } from '../../AppContext';

const DisplayPostLikeProfil = () => {
    const postsData = useSelector((state) => state.post.post);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch])
    console.log("datapost like");
    console.log(postsData);

    return (
        <div>
            <ul>
            {!isEmpty(postsData) &&
            postsData.filter(post => post.likers.includes(uid))
            .map((post) => {
                return <Post post={post} key={post._id}/>
             })
}
                
            </ul>
        </div>
    );
};

export default DisplayPostLikeProfil;