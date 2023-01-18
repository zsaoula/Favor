import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, getPostsDisc } from '../../actions/post.actions';
import { isEmpty } from "../Utils";
import Post from './Post';

const DisplayPosts = ( {type} ) => {
    const [loadPost, setLoadPost] = useState(true);
    const [count , setCount] = useState(5);
    const dispatch = useDispatch();
    const postsData = useSelector((state) => state.post.post);
    
    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight){
            setLoadPost(true);
        }
    }

    useEffect(() => {
        while(postsData== null){

        }
        if (loadPost) {
            if(type === "discover"){
                dispatch(getPostsDisc(count));
            }
            else{
                dispatch(getPosts(count));
            }
            setLoadPost(false);
            setCount(count + 5);
        }
        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll',loadMore);
    }, [loadPost,dispatch,count])

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