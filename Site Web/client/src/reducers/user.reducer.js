import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUserData: (state,action) => {
            state.user = action.payload;
        },
        setUserDataImg: (state,action) => {
            state.user = {...state, picture: action.payload};
        },
        setUserToFollowData: (state,action) => {
            state.user = {...state,
                following: [action.payload.idToFollow, ...state.following],}
        },
        setUserToUnFollowData: (state,action) => {
            state.user = {...state,
            following: state.following.filter(
              (id) => id !== action.payload.idToUnfollow
            ),}; 
        },
        
    },
});

export const { setUserToFollowData} = userSlice.actions;
export const {setUserToUnFollowData} = userSlice.actions;
export const {setUserData} = userSlice.actions;
export const {setUserDataImg} = userSlice.actions;
export default userSlice.reducer;



