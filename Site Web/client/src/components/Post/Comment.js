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

// return (
//     <div className="comments-container">
//       {post.comments.map((comment) => {
//         return (
//           <div
//             className={
//               comment.commenterId === userData._id
//                 ? "comment-container client"
//                 : "comment-container"
//             }
//             key={comment._id}
//           >
//             <div className="left-part">
//               <img
//                 src={
//                   !isEmpty(usersData[0]) &&
//                   usersData
//                     .map((user) => {
//                       if (user._id === comment.commenterId) return user.picture;
//                       else return null;
//                     })
//                     .join("")
//                 }
//                 alt="commenter-pic"
//               />
//             </div>
//             <div className="right-part">
//               <div className="comment-header">
//                 <div className="pseudo">
//                   <h3>{comment.commenterPseudo}</h3>
//                   {comment.commenterId !== userData._id && (
//                     <FollowHandler
//                       idToFollow={comment.commenterId}
//                       type={"card"}
//                     />
//                   )}
//                 </div>
//                 <span>{timestampParser(comment.timestamp)}</span>
//               </div>
//               <p>{comment.text}</p>
//               <ActionComment comment={comment} postId={post._id} />
//             </div>
//           </div>
//         );
//       })}
//       {userData._id && (
//         <form action="" onSubmit={handleComment} className="comment-form">
//           <input
//             type="text"
//             name="text"
//             onChange={(e) => setMessage(e.target.value)}
//             value={message}
//             placeholder="Laisser un commentaire"
//           />
//           <br />
//           <input type="submit" value="Envoyer" />
//         </form>
//       )}
//     </div>
//     );

export default Comment;