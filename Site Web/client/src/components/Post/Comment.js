import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getPosts } from '../../actions/post.actions';
import FollowHandler from '../UserProfil/FollowHandler';
import { isEmpty, timestampParser } from '../Utils';
import ActionComment from './ActionComment';
import MiniProfil from "../MiniProfil";



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
        <div className="comments-container">
          {post.comments.map((comment) => {
            return (
              <div
                className={
                  comment.commentId === userData._id
                    ? "comment-container client"
                    : "comment-container"
                }
                key={comment._id}
              >
                <div className="left-part">
                <MiniProfil uid={comment.commentId}/>
                </div>
                <div className="right-part">
                  <div className="comment-header">
                    <div className="pseudo">
                    <FollowHandler
                          idToFollow={comment.commentId}
                          type={"suggest"}
                        />
                    </div>
                    <span>{timestampParser(comment.timestamp)}</span>
                  </div>
                  <p>{comment.text}</p>
                  <ActionComment commentaire={comment} postId={post._id} />
                </div>
              </div>
            );
          })}
          {userData._id && (
            <form action="" onSubmit={handleComment} className="comment-form">
              <input
                type="text"
                name="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Laisser un commentaire"
              />
              <br />
              <input type="submit" value="Envoyer" />
            </form>
          )}
        </div>
        );
};



export default Comment;