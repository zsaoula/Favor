import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from "../AppContext";
import { useDispatch } from 'react-redux';
import Coeur from '../../assets/img/coeurs.png';
import CoeurPlein from '../../assets/img/coeursPlein.png';
import { likePost, unlikePost } from '../../actions/post.actions';

const ButtonLike = ( { post } ) => {
  /*const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = (e) => {
    e.preventDefault();
    dispatch(likePost(post._id, uid));
    setLiked(true);
  };

  const unlike = (e) => {
    e.preventDefault();
    dispatch(unlikePost(post._id, uid));
    setLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) {
        setLiked(true);
    } else {
        setLiked(false);
    }
  }, [uid, post.likers, liked]);

  return (
      <div>
          {uid && liked === false && (
              <img src={Coeur} onClick={like} alt="like" />
          )}
          {uid && liked && (
              <img src={CoeurPlein} onClick={unlike} alt="unlike" />
          )}
      </div>
  );*/

  const [likes, setLikes] = useState(post.likers.length);
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      dispatch(unlikePost(post._id, uid));
      setLiked(true);
    } else {
      setLikes(likes - 1);
      dispatch(unlikePost(post._id, uid));
      setLiked(false);
    }
  }

  return (
      <>
      <div>
        {uid && liked === false && (
            <img src={Coeur} onClick={handleLike} alt="like" /> )
        }
        {uid && liked && (
            <img src={CoeurPlein} onClick={handleLike} alt="unlike" />
        )}
      </div>
          <div>{likes}</div>
      </>
  )
};

export default ButtonLike;