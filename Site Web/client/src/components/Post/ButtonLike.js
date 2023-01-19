import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from "../AppContext";
import { useDispatch } from 'react-redux';
import Coeur from '../../assets/img/coeurs.png';
import CoeurPlein from '../../assets/img/coeursPlein.png';
import { likePost, unlikePost } from '../../actions/post.actions';

const ButtonLike = ( { post } ) => {
  const uid = useContext(UidContext);
  const [likes, setLikes] = useState(post.likers.length);
  const [liked, setLiked] = useState(post.likers.includes(uid));
  const dispatch = useDispatch();

  const like = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
    setLiked(true);
    dispatch(likePost(post._id, uid));
  };

  const unlike = (e) => {
    e.preventDefault();
    setLikes(likes - 1);
    setLiked(false);
    dispatch(unlikePost(post._id, uid));
  };


  return (
      <>
         <div>
            {uid && liked === false && (
                <img src={Coeur} onClick={like} alt="like" />
            )}
            {uid && liked && (
                <img src={CoeurPlein} onClick={unlike} alt="unlike" />
            )}
          </div>
          <div>
            {likes}
          </div>
      </>
  );
};

export default ButtonLike;