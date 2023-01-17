import axios from "axios";
import { setUserData, setUserDataImg, setUserToFollowData, setUserToUnFollowData } from "../reducers/user.reducer";


export const getUser = (uid) => {
    return (dispatch)=> {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
        .then((res) => {
            dispatch(setUserData(res.data))
        })
        .catch((err) => console.log(err));
    };
};

export const uploadPicture = (data, id) => {
    return (dispatch) => {
        return axios
        .post(`${process.env.REACT_APP_API_URL}api/user/upload`,data)
        .then((res) => {
            return axios 
            .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
            .then((res) => {        
                dispatch(setUserDataImg(res.data.picture));
            })
        })
        .catch((err) => console.log(err));
    };
};


export const followUser = (followerId, idToFollow) => {
    return async (dispatch) => {
      try {
            const res = await axios({
                method: "patch",
                url: `${process.env.REACT_APP_API_URL}api/user/follow/` + followerId,
                data: { idToFollow },
            });
            dispatch(setUserToFollowData({payload: { idToFollow }}));
        } catch (err) {
            return console.log(err);
        }
    };
  };
  
export const unFollowUser = (followerId, idToUnFollow) => {
    return (dispatch) => {
        return axios({
         method: "patch",
         url: `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
         data: { idToUnFollow },
        })
        .then((res) => {
            dispatch(setUserToUnFollowData({payload: {idToUnFollow}}));
        })
        .catch((err) => console.log(err));
    };
};


