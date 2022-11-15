import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
    name: "pictures",
    initialState: {
        pictures: null,
    },
    reducers: {
        setPictureData: (state,action) => {
            state.pictures = action.payload;
        },
    },
});

export const {setPictureData} = picturesSlice.actions;
export default picturesSlice.reducer;


