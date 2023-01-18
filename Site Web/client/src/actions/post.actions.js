import axios from "axios";
import { setPostError } from "../reducers/error.reducer";
import { setPostData, setPostLikeData, setPostUnLikeData } from "../reducers/post.reducer";

export const getPosts = (num) => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/post/`)
        .then((res) => {
            let array = res.data.slice(0, num);
            dispatch(setPostData(array));
        })
        .catch((err) => console.log(err))
    }
}

export const getPostsDisc = (num) => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/post/`)
        .then((res) => {
            console.log("test");
            let array = res.data.sort((a, b) => b.likers.length - a.likers.length);
            array = array.slice(0, num);
            console.log(array);
            dispatch(setPostData(array));
        })
        .catch((err) => console.log(err))
    }
}

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
            data: { id: userId },
        })
        .then((res) => {
            dispatch(setPostLikeData({payload:{ postId, userId }}));
        })
        .catch((err) => console.log(err))
    }
}

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
            data: { id: userId },
        })
        .then((res) => {
            //dispatch(setPostUnLikeData({ postId, userId }));
        })
        .catch((err) => console.log(err))
    }
}

export const addPost = (data) => {
    console.log(data,"test")
    return (dispatch) => {
      return axios
        .post(`${process.env.REACT_APP_API_URL}api/post/`, data)
        .then((res) => {
            console.log(data,"test");
         if (res.data.errors) {
            dispatch(setPostError({payload: res.data.errors }));
         } else {
             dispatch(setPostError({payload: "" }));
          }
        });
    };
  };


// //   export const updatePost = (postId, message) => {
// //     return (dispatch) => {
// //       return axios({
// //         method: "put",
// //         url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
// //         data: { message },
// //       })
// //         .then((res) => {
// //           dispatch({ type: UPDATE_POST, payload: { message, postId } });
// //         })
// //         .catch((err) => console.log(err));
// //     };
// //   };
  
//   export const deletePost = (postId) => {
//     return (dispatch) => {
//       return axios({
//         method: "delete",
//         url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
//       })
//         .then((res) => {
//           dispatch({ type: DELETE_POST, payload: { postId } });
//         })
//         .catch((err) => console.log(err));
//     };
//   };
  
export const addComment = (postId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
        return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/post/comment-post/${postId}`,
        data: { commenterId, text, commenterPseudo },
        })
        .then((res) => {
            // dispatch({ type: ADD_COMMENT, payload: { postId } });
        })
        .catch((err) => console.log(err));
    };
};
  
export const editComment = (postId, commentId, text) => {
    return (dispatch) => {
        return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/post/edit-comment-post/${postId}`,
        data: { commentId, text },
        })
        .then((res) => {
            // dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
        })
        .catch((err) => console.log(err));
    };
};
  
export const deleteComment = (postId, commentId) => {
    return (dispatch) => {
        return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/post/delete-comment-post/${postId}`,
        data: { commentId },
        })
        .then((res) => {
            //dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
        })
        .catch((err) => console.log(err));
    };
};

//   export const getTrends = (sortedArray) => {
//     return (dispatch) => {
//       dispatch({ type: GET_TRENDS, payload: sortedArray });
//     };
//   };