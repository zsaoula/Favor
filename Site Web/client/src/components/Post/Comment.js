import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getPosts } from '../../actions/post.actions';
import FollowHandler from '../UserProfil/FollowHandler';
import { isEmpty, timestampParser } from '../Utils';
import ActionComment from './ActionComment';

const Comment = ({ post }) => {
    const [message, setMessage] = useState("");
    const usersData = useSelector((state) => state.users.users);
    const userData = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleComment = (e) => {
        e.preventDefault();
    
        if (message) {
          dispatch(addComment(post._id, userData._id, message, userData.pseudo))
            .then(() => dispatch(getPosts()))
            .then(() => setMessage(''));
        }
      };

    return (
        <div>
            {post.comments.map((comment) => {
                return (
                    <div className={comment.commenterId === userData._id ? "comment-friend" : "comment-user"} key={comment._id}>
                        <img id="PhotoProfile" alt="ppCommentaire" src={
                                !isEmpty(usersData[0]) &&
                                usersData.map((user) => {
                                    if (user._id === comment.commenterId) return user.picture;
                                    else return null;
                                }).join('')
                            }/>
                        <p>{comment.commenterPseudo}</p>
                        {comment.commenterPseudo !== userData._id && (
                        <FollowHandler idToFollow={comment.commenterId} type={'suggest'}/>)}
                        <span></span>
                        {timestampParser(comment.timestamp)}
                        <p>{comment.text}</p>
                        <ActionComment commentaire={comment} postId={post._Id} />
                    </div>
                );
            })}
            {userData._id && (
                <form action="" onSubmit={handleComment} className="form-comment">
                    <input type="text" name="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Ajoutez un commentaire" />
                    <input type="submit" value="Partager"/>
                </form>
            )}
        </div>
    );
};

export default Comment;