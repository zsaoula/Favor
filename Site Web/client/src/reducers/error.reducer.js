import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: "error",
    initialState: {
        postError: [],
        userError: []
    },
    reducers: {
        setPostError: (state,action) => {
            state.postError = action.payload;
            state.postUser = [];
        },
        setUserError: (state,action) => {
            state.postUser = action.payload;
            state.userError = [];
        },
    }
});

export const {setPostError} = errorSlice.actions;
export const {setUserError} = errorSlice.actions;
export default errorSlice.reducer;
