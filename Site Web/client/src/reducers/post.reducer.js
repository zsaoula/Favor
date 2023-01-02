import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        post : null,
    },
    reducers: {
        setPostData: (state,action) => {
            state.post = action.payload;
            console.log(state.post)
        },
        setPostLikeData: (state,action) => {
            console.log(...state.post);
            if (state.post._id === action.payload.postId) {
                return {
                ...state.post,
                likers: [action.payload.userId, ...state.post.likers],
                };
            }
            return state.post;
        },
        setPostUnLikeData: (state,action) => {
            console.log(state);
            console.log(action);
        }
    },
});

export const {setPostUnLikeData} = postSlice.actions;
export const {setPostLikeData} = postSlice.actions;
export const {setPostData} = postSlice.actions;
export default postSlice.reducer;
