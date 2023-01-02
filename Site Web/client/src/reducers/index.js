//import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "./error.reducer";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";

/*export default combineReducers({
    userReducer,
})*/

//import picturesReducer from "../feature/pictures.slice";

export default configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        post: postReducer,
        error: errorReducer,
    },
});