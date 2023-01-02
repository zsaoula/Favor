import axios from "axios";
import { setUsersData } from "../reducers/users.reducer";


export const getUsers = () => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/user`)
        .then((res) => {
            dispatch(setUsersData(res.data));
        })
        .catch((err) => console.log(err));
    };
};