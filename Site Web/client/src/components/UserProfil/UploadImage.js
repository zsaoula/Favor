import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UploadImage = () => {
    const [file,setFile] =useState();
    //pour envoyer l'image
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.user)
    
    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", userData.pseudo);
        data.append("userId", userData._id);
        data.append("file",file);

        dispatch(uploadPicture(data, userData._id));
    }
    return (
        <form action="" onSubmit={handlePicture} className="">
            <label htmlFor='file'>Changer d'image</label>
            <input type="file" id="file" accept='.jpg, .jpeg, .png' onChange={(e) => setFile(e.target.files[0])}/>
            <br/>
            <input type="submit" value="Send"/>
        </form>
    );
};

export default UploadImage;