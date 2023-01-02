import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post.actions';
import NewPoste from '../NewPoste';
import { isEmpty } from "../Utils";
import Post from './Post';

const DisplayPosts = () => {
    const [loadPost, setLoadPost] = useState(true);
    const [count , setCount] = useState(5);
    const dispatch = useDispatch();
    const postsData = useSelector((state) => state.post.post);

    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts());
            setLoadPost(false);
        }
    }, [loadPost,dispatch])

    return (
        <div>
            <ul>
                {!isEmpty(postsData[0]) &&
                    postsData.map((post) => {
                        return <Post post={post} key={post._id}/>
                    })}
            </ul>
        </div>
    );
};

export default DisplayPosts;